import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "sonner";

import { registerSchema } from "@/validations/auth.schema";

import { registerUser } from "@/services/auth.service";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

export default function RegisterPage() {
     const navigate = useNavigate();

     const [loading, setLoading] = useState(false);

     const {
          register,
          handleSubmit,
          formState: { errors },
     } = useForm({
          resolver: zodResolver(registerSchema),

          defaultValues: {
               name: "",
               email: "",
               password: "",
          },
     });

     const onSubmit = async (values) => {
          try {
               setLoading(true);

               await registerUser(values);

               toast.success(
                    "Account created successfully"
               );

               navigate("/login");
          } catch (error) {
               toast.error(
                    error?.response?.data?.message ||
                    "Registration failed"
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
                              Create account
                         </h1>

                         <p className="mt-2 text-zinc-400">
                              Start using PollZen today
                         </p>
                    </div>

                    <form
                         onSubmit={handleSubmit(onSubmit)}
                         className="space-y-5"
                    >
                         <div>
                              <Input
                                   placeholder="Enter name"
                                   {...register("name")}
                                   className="h-11 bg-zinc-950 border-zinc-800"
                              />

                              {errors.name && (
                                   <p className="mt-2 text-sm text-red-500">
                                        {errors.name.message}
                                   </p>
                              )}
                         </div>

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
                                   ? "Creating account..."
                                   : "Register"}
                         </Button>
                    </form>

                    <p className="mt-6 text-center text-sm text-zinc-400">
                         Already have an account?{" "}

                         <Link
                              to="/login"
                              className="text-indigo-400 hover:text-indigo-300"
                         >
                              Login
                         </Link>
                    </p>
               </CardContent>
          </Card>
     );
}