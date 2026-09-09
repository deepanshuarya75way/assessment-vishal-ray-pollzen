import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "@/validations/auth.schema";
import { registerUser } from "@/services/auth.service";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function RegisterPage() {
     const navigate = useNavigate();

     const [loading, setLoading] = useState(false);

     const {register, handleSubmit, formState: { errors } } = useForm({
          resolver: zodResolver(registerSchema),

          defaultValues: { name: "", email: "", password: ""  },
     });

     const onSubmit = async (values) => {
          try {
               setLoading(true);

               await registerUser(values);

               toast.success( "Account created successfully" );

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
    <div className="grid gap-6 rounded-xl bg-card p-6 shadow-lg md:grid-cols-2">
      <div className="hidden flex-col justify-center gap-4 md:flex">
        <h2 className="text-2xl font-bold">Create your PollZen account</h2>
        <p className="text-sm text-muted-foreground">Run realtime polls, share public links, and get instant insights from audiences.</p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• Easy poll creation</li>
          <li>• Live charts & reports</li>
          <li>• Shareable public links</li>
        </ul>
      </div>

      <div>
        <Card className="shadow-none">
          <CardContent className="p-8">
            <div className="mb-6">
              <h1 className="text-3xl font-bold tracking-tight">Create account</h1>

              <p className="mt-2 text-sm text-muted-foreground">Start using PollZen today</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Enter name" {...register("name")} className="h-11" />

                {errors.name && <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>}
              </div>

              <div>
                <Input type="email" placeholder="Enter email" {...register("email")} className="h-11" />

                {errors.email && <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>}
              </div>

              <div>
                <Input type="password" placeholder="Enter password" {...register("password")} className="h-11" />

                {errors.password && <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>}
              </div>

              <Button disabled={loading} className="w-full h-11" type="submit">
                {loading ? "Creating account..." : "Register"}
              </Button>
            </form>

            <p className="mt-6 text-center text-sm text-muted-foreground">
              Already have an account?{' '}

              <Link to="/login" className="text-primary hover:brightness-90">
                Login
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}