import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/validations/auth.schema";
import { loginUser, getCurrentUser } from "@/services/auth.service";
import { useAuthStore } from "@/store/auth.store";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";


export default function LoginPage() {
     const navigate = useNavigate();

     const setAuth = useAuthStore(
          (state) => state.setAuth
     );

     const [loading, setLoading] = useState(false);

     const {register,handleSubmit, formState: { errors }, } = useForm({
          resolver: zodResolver(loginSchema),
          defaultValues: {
               email: "",
               password: "",
          },
     });

     const onSubmit = async (values) => {
          try {
             
               setLoading(true);

               const loginResponse = await loginUser(values);
               
               const token = loginResponse?.data?.token;

               localStorage.setItem("token", token);

               const meResponse =await getCurrentUser();

               setAuth({
                    user: meResponse.data,
                    token,
               });

               toast.success("Login successful");

               navigate("/app/dashboard")
          } catch (error) {
               toast.error(
                    error?.response?.data?.message ||
                    "Login failed"
               );
          } finally {
               setLoading(false);
          }
     };

     return (
       <div className="grid gap-6 rounded-xl bg-card p-6 shadow-lg md:grid-cols-2">
         <div className="hidden flex-col justify-center gap-4 md:flex">
           <h2 className="text-2xl font-bold">Welcome back to PollZen</h2>
           <p className="text-sm text-muted-foreground">Access your realtime polls, track live responses, and collaborate with your audience.</p>
           <ul className="mt-4 space-y-2 text-sm">
             <li>• Live analytics and charts</li>
             <li>• Public poll links & QR codes</li>
             <li>• Secure and scalable</li>
           </ul>
         </div>

         <div>
           <Card className="shadow-none">
             <CardContent className="p-8">
               <div className="mb-6">
                 <h1 className="text-3xl font-bold tracking-tight">Sign in</h1>

                 <p className="mt-2 text-sm text-muted-foreground">Login to continue to your dashboard</p>
               </div>

               <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                 <div>
                   <Input type="email" placeholder="Enter email" {...register("email")} className="h-11" />

                   {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
                 </div>

                 <div>
                   <Input type="password" placeholder="Enter password" {...register("password")} className="h-11" />

                   {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
                 </div>

                 <Button disabled={loading} className="w-full h-11" type="submit">
                   {loading ? "Logging in..." : "Login"}
                 </Button>
               </form>

               <p className="mt-6 text-center text-sm text-muted-foreground">
                 Don't have an account?{' '}

                 <Link to="/register" className="text-primary hover:brightness-90">
                   Register
                 </Link>
               </p>
             </CardContent>
           </Card>
         </div>
       </div>
     );
}