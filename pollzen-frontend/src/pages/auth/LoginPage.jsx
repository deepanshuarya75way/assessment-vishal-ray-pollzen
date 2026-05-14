import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
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

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
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

               const meResponse =
                    await getCurrentUser();

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
          <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-xl">
               <CardContent className="p-8">
                    <div className="mb-8">
                         <h1 className="text-3xl font-bold tracking-tight">
                              Welcome back
                         </h1>

                         <p className="mt-2 text-zinc-400">
                              Login to continue to PollZen
                         </p>
                    </div>

                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="space-y-5"
                    >
                         <div>
                              <Input
                                   type="email"
                                   placeholder="Enter email"
                                   {...register("email")}
                                   className="h-11 bg-zinc-950 border-zinc-800"
                              />

                              {errors.email && (
                                   <p className="mt-2 text-sm text-red-500">
                                        {errors.email.message}
                                   </p>
                              )}
                         </div>

                         <div>
                              <Input
                                   type="password"
                                   placeholder="Enter password"
                                   {...register("password")}
                                   className="h-11 bg-zinc-950 border-zinc-800"
                              />

                              {errors.password && (
                                   <p className="mt-2 text-sm text-red-500">
                                        {errors.password.message}
                                   </p>
                              )}
                         </div>

                         <Button
                              disabled={loading}
                              className="w-full h-11"
                              type="submit"
                         >
                              {loading
                                   ? "Logging in..."
                                   : "Login"}
                         </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-zinc-400">
                         Don't have an account?{" "}

                         <Link
                              to="/register"
                              className="text-indigo-400 hover:text-indigo-300"
                         >
                              Register
                         </Link>
                    </p>
               </CardContent>
          </Card>
     );
}