import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
     BarChart3,
     Vote,
     Zap,
     Globe,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
     {
          title: "Realtime Analytics",
          description:
               "Watch responses update live with powerful visual insights.",

          icon: BarChart3,
     },

     {
          title: "Interactive Polls",
          description:
               "Create engaging polls with a modern realtime experience.",

          icon: Vote,
     },

     {
          title: "Lightning Fast",
          description:
               "Built with modern realtime architecture and optimized UX.",

          icon: Zap,
     },

     {
          title: "Public Sharing",
          description:
               "Share polls instantly with public participation support.",

          icon: Globe,
     },
];

export default function LandingPage() {
     return (
          <div className="min-h-screen bg-zinc-950 text-white">
               <header className="sticky top-0 z-50 border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl">
                    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                         <Link
                              to="/"
                              className="text-xl font-bold tracking-tight"
                         >
                              PollZen
                         </Link>

                         <div className="flex items-center gap-3">
                              <Link to="/login">
                                   <Button variant="ghost">
                                        Login
                                   </Button>
                              </Link>

                              <Link to="/register">
                                   <Button>
                                        Get Started
                                   </Button>
                              </Link>
                         </div>
                    </div>
               </header>

               <main>
                    <section className="relative overflow-hidden">
                         <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.15),transparent_50%)]" />

                         <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        y: 40,
                                   }}
                                   animate={{
                                        opacity: 1,
                                        y: 0,
                                   }}
                                   transition={{
                                        duration: 0.7,
                                   }}
                                   className="max-w-4xl"
                              >
                                   <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                                        Realtime Polling SaaS Platform
                                   </div>

                                   <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
                                        Create realtime polls with premium analytics
                                   </h1>

                                   <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                                        PollZen helps teams create interactive realtime polls,
                                        visualize analytics instantly, and collaborate with
                                        live audience feedback.
                                   </p>

                                   <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                                        <Link to="/register">
                                             <Button
                                                  size="lg"
                                                  className="h-12 px-8 text-base"
                                                  
                                             >
                                                  Start Creating Polls
                                             </Button>
                                        </Link>

                                        <Link to="/login">
                                             <Button
                                                  variant="secondary"
                                                  size="lg"
                                                  className="h-12 px-8 text-base"
                                             >
                                                  Open Dashboard
                                             </Button>
                                        </Link>
                                   </div>
                              </motion.div>
                         </div>
                    </section>

                    <section className="border-t border-zinc-800 bg-zinc-900/30 py-24">
                         <div className="mx-auto max-w-7xl px-6">
                              <div className="mx-auto max-w-2xl text-center">
                                   <h2 className="text-4xl font-bold tracking-tight">
                                        Everything needed for modern polling
                                   </h2>

                                   <p className="mt-4 text-zinc-400">
                                        Built with realtime architecture and modern UX principles.
                                   </p>
                              </div>

                              <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                                   {features.map((feature) => {
                                        const Icon = feature.icon;

                                        return (
                                             <motion.div
                                                  key={feature.title}
                                                  initial={{
                                                       opacity: 0,
                                                       y: 20,
                                                  }}
                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                  }}
                                                  viewport={{
                                                       once: true,
                                                  }}
                                                  transition={{
                                                       duration: 0.5,
                                                  }}
                                                  className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
                                             >
                                                  <div className="inline-flex rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                                                       <Icon size={24} />
                                                  </div>

                                                  <h3 className="mt-5 text-xl font-semibold">
                                                       {feature.title}
                                                  </h3>

                                                  <p className="mt-3 leading-7 text-zinc-400">
                                                       {feature.description}
                                                  </p>
                                             </motion.div>
                                        );
                                   })}
                              </div>
                         </div>
                    </section>

                    <section className="py-24">
                         <div className="mx-auto max-w-5xl px-6 text-center">
                              <h2 className="text-4xl font-bold tracking-tight">
                                   Ready to build realtime experiences?
                              </h2>

                              <p className="mt-4 text-zinc-400">
                                   Start creating realtime interactive polls today.
                              </p>

                              <div className="mt-8">
                                   <Link to="/register">
                                        <Button
                                             size="lg"
                                             className="h-12 px-8 text-base"
                                        >
                                             Launch PollZen
                                        </Button>
                                   </Link>
                              </div>
                         </div>
                    </section>
               </main>
          </div>
     );
}