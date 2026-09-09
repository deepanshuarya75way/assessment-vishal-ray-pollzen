import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import {
     Activity,
     ArrowRight,
     BarChart3,
     Globe,
     ShieldCheck,
     Sparkles,
     Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import SiteNavbar from "@/components/layout/SiteNavbar";
import SiteFooter from "@/components/layout/SiteFooter";

const features = [
     {
          title: "Realtime Analytics",
          description:
               "Watch live voting analytics update instantly with interactive visualizations.",

          icon: BarChart3,
     },

     {
          title: "Public Poll Sharing",
          description:
               "Distribute polls instantly using public links and QR code sharing.",

          icon: Globe,
     },

     {
          title: "Lightning Fast UX",
          description:
               "Modern architecture optimized for realtime engagement and responsiveness.",

          icon: Zap,
     },

     {
          title: "Secure & Reliable",
          description:
               "Built with scalable backend architecture and secure polling workflows.",

          icon: ShieldCheck,
     },
];

export default function LandingPage() {

     return (
          <div className="min-h-screen overflow-hidden bg-background text-foreground">

               {/* BACKGROUND */}

               <div className="fixed inset-0 -z-10">

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_40%)]" />

                    <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />

               </div>

               <SiteNavbar />

               <main>

                    {/* HERO */}

                    <section className="relative">

                         <div className="mx-auto grid min-h-[92vh] max-w-7xl items-center gap-16 px-6 py-20 lg:grid-cols-2">

                              {/* LEFT */}

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
                              >

                                   <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">

                                        <Sparkles size={16} />

                                        Modern Realtime Polling SaaS

                                   </div>

                                   <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

                                        Realtime polling built for modern teams

                                   </h1>

                                   <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">

                                        Create interactive polls, collect realtime responses,
                                        visualize live analytics, and engage your audience instantly.

                                   </p>

                                   <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                                        <Link to="/register">

                                             <Button
                                                  size="lg"
                                                  className="h-12 px-8 text-base bg-indigo-600 hover:bg-indigo-500"
                                             >
                                                  Start Building

                                                  <ArrowRight size={18} />
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

                                   {/* TRUST SECTION */}

                                   <div className="mt-14 space-y-6">

                                        <div className="flex flex-wrap items-center gap-3">

                                             <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
                                                  Realtime Analytics
                                             </div>

                                             <div className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                                                  Public Poll Sharing
                                             </div>

                                             <div className="rounded-full border border-pink-500/20 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                                                  Interactive Dashboards
                                             </div>

                                        </div>

                                        <div className="max-w-2xl rounded-3xl border bg-card p-6">

                                             <div className="flex items-center gap-3">

                                                  <div className="rounded-2xl bg-indigo-500/10 p-3 text-indigo-400">
                                                       <BarChart3 size={22} />
                                                  </div>

                                                  <div>

                                                       <h3 className="text-lg font-semibold">
                                                            Built for modern realtime engagement
                                                       </h3>

                                                                    <p className="mt-1 text-sm text-muted-foreground">
                                                            Create live polls, collect responses instantly,
                                                            and visualize audience insights with premium analytics.
                                                       </p>

                                                  </div>

                                             </div>

                                        </div>

                                   </div>

                              </motion.div>

                              {/* RIGHT */}

                              <motion.div
                                   initial={{
                                        opacity: 0,
                                        scale: 0.95,
                                   }}

                                   animate={{
                                        opacity: 1,
                                        scale: 1,
                                   }}

                                   transition={{
                                        duration: 0.8,
                                   }}

                                   className="relative"
                              >

                                   <div className="absolute inset-0 rounded-[32px] bg-indigo-500/20 blur-3xl" />

                                   <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">

                                        {/* TOP BAR */}

                                        <div className="flex items-center gap-2 border-b border-white/10 px-6 py-4">

                                             <div className="h-3 w-3 rounded-full bg-red-400" />

                                             <div className="h-3 w-3 rounded-full bg-yellow-400" />

                                             <div className="h-3 w-3 rounded-full bg-green-400" />

                                        </div>

                                        {/* CONTENT */}

                                        <div className="space-y-6 p-6">

                                             <div className="rounded-2xl border bg-card p-6">

                                                  <div className="flex items-center justify-between">

                                                       <div>

                                                            <p className="text-sm text-muted-foreground">Active Poll</p>

                                                            <h3 className="mt-2 text-xl font-semibold">
                                                                 Favorite Frontend Framework
                                                            </h3>

                                                       </div>

                                                       <div className="rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
                                                            <Activity size={22} />
                                                       </div>

                                                  </div>

                                                  <div className="mt-6 space-y-4">

                                                       <div className="space-y-2">

                                                            <div className="flex justify-between text-sm">

                                                                 <span>React</span>

                                                                 <span>68%</span>

                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-muted">

                                                                 <div className="h-full w-[68%] rounded-full bg-indigo-500" />

                                                            </div>

                                                       </div>

                                                       <div className="space-y-2">

                                                            <div className="flex justify-between text-sm">

                                                                 <span>Vue</span>

                                                                 <span>18%</span>

                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-muted">

                                                                 <div className="h-full w-[18%] rounded-full bg-emerald-500" />

                                                            </div>

                                                       </div>

                                                       <div className="space-y-2">

                                                            <div className="flex justify-between text-sm">

                                                                 <span>Svelte</span>

                                                                 <span>14%</span>

                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-muted">

                                                                 <div className="h-full w-[14%] rounded-full bg-pink-500" />

                                                            </div>

                                                       </div>

                                                  </div>

                                             </div>

                                             <div className="grid gap-4 md:grid-cols-2">

                                                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">

                                                              <p className="text-sm text-muted-foreground">
                                                            Live Responses
                                                       </p>

                                                       <h3 className="mt-3 text-4xl font-bold">
                                                            Realtime
                                                       </h3>

                                                  </div>

                                                  <div className="rounded-2xl border border-white/10 bg-black/30 p-5">

                                                                    <p className="text-sm text-muted-foreground">
                                                            Experience
                                                       </p>

                                                       <h3 className="mt-3 text-4xl font-bold">
                                                            Premium
                                                       </h3>

                                                  </div>

                                             </div>

                                        </div>

                                   </div>

                              </motion.div>

                         </div>

                    </section>

                    {/* FEATURES */}

                    <section id="features" className="border-t border-white/10 py-28">

                         <div className="mx-auto max-w-7xl px-6">

                              <div className="mx-auto max-w-3xl text-center">

                                   <h2 className="text-4xl font-bold tracking-tight md:text-5xl">

                                        Everything needed for realtime engagement

                                   </h2>

                                   <p className="mt-6 text-lg leading-8 text-muted-foreground">
                                        Built with modern fullstack architecture and premium user experience principles.
                                   </p>

                              </div>

                              <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                                   {features.map((feature, index) => {

                                        const Icon = feature.icon;

                                        return (

                                             <motion.div
                                                  key={feature.title}

                                                  initial={{
                                                       opacity: 0,
                                                       y: 30,
                                                  }}

                                                  whileInView={{
                                                       opacity: 1,
                                                       y: 0,
                                                  }}

                                                  transition={{
                                                       delay: index * 0.1,
                                                  }}

                                                  viewport={{
                                                       once: true,
                                                  }}

                                                  className="group rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary hover:bg-primary/5"
                                             >

                                                  <div className="inline-flex rounded-2xl bg-indigo-500/10 p-4 text-indigo-400">

                                                       <Icon size={26} />

                                                  </div>

                                                  <h3 className="mt-6 text-xl font-semibold">

                                                       {feature.title}

                                                  </h3>

                                                  <p className="mt-4 leading-7 text-muted-foreground">{feature.description}</p>

                                             </motion.div>

                                        );
                                   })}

                              </div>

                         </div>

                    </section>

                         {/* TESTIMONIALS */}

                         <section id="testimonials" className="py-20">
                              <div className="mx-auto max-w-7xl px-6">
                                   <div className="mx-auto max-w-3xl text-center">
                                        <h2 className="text-3xl font-bold">Trusted by teams worldwide</h2>
                                        <p className="mt-4 text-lg text-muted-foreground">Organizations use PollZen to run live polls during meetings, lectures, and events.</p>
                                   </div>

                                   <div className="mt-12 grid gap-6 md:grid-cols-3">
                                        <div className="rounded-2xl border bg-card p-6">
                                             <p className="text-sm text-muted-foreground">"PollZen transformed our event engagement. Results stream in live and the charts are beautiful."</p>
                                             <div className="mt-4 flex items-center gap-3">
                                                  <div className="h-10 w-10 rounded-full bg-indigo-500/10" />
                                                  <div>
                                                       <div className="font-semibold">Ava Roberts</div>
                                                       <div className="text-sm text-muted-foreground">Event Producer</div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="rounded-2xl border bg-card p-6">
                                             <p className="text-sm text-muted-foreground">"Realtime responses helped our classroom discussions stay focused and meaningful."</p>
                                             <div className="mt-4 flex items-center gap-3">
                                                  <div className="h-10 w-10 rounded-full bg-emerald-500/10" />
                                                  <div>
                                                       <div className="font-semibold">Dr. Marcus Lee</div>
                                                       <div className="text-sm text-muted-foreground">Professor</div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div className="rounded-2xl border bg-card p-6">
                                             <p className="text-sm text-muted-foreground">"Setup was simple and the realtime analytics gave us actionable insights during the session."</p>
                                             <div className="mt-4 flex items-center gap-3">
                                                  <div className="h-10 w-10 rounded-full bg-pink-500/10" />
                                                  <div>
                                                       <div className="font-semibold">Liam Wong</div>
                                                       <div className="text-sm text-muted-foreground">Product Manager</div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                         {/* PRICING */}

                         <section id="pricing" className="border-t border-white/10 py-20">
                              <div className="mx-auto max-w-7xl px-6">
                                   <div className="mx-auto max-w-3xl text-center">
                                        <h2 className="text-3xl font-bold">Simple pricing that scales</h2>
                                        <p className="mt-4 text-lg text-muted-foreground">Start for free — scale to teams with advanced controls and enterprise features.</p>
                                   </div>

                                   <div className="mt-10 grid gap-6 md:grid-cols-3">
                                        <div className="rounded-2xl border bg-card p-6 text-center">
                                             <div className="text-sm font-medium text-muted-foreground">Free</div>
                                             <div className="mt-4 text-3xl font-bold">$0</div>
                                             <div className="mt-4 text-sm text-muted-foreground">Unlimited public polls, basic analytics.</div>
                                             <div className="mt-6">
                                                  <Button className="w-full">Get started</Button>
                                             </div>
                                        </div>

                                        <div className="rounded-2xl border bg-card p-6 text-center">
                                             <div className="text-sm font-medium text-muted-foreground">Pro</div>
                                             <div className="mt-4 text-3xl font-bold">$15/mo</div>
                                             <div className="mt-4 text-sm text-muted-foreground">Advanced analytics, private polls, priority support.</div>
                                             <div className="mt-6">
                                                  <Button className="w-full bg-indigo-600 hover:bg-indigo-500">Choose Pro</Button>
                                             </div>
                                        </div>

                                        <div className="rounded-2xl border bg-card p-6 text-center">
                                             <div className="text-sm font-medium text-muted-foreground">Enterprise</div>
                                             <div className="mt-4 text-3xl font-bold">Custom</div>
                                             <div className="mt-4 text-sm text-muted-foreground">SAML, SLA, onboarding, and dedicated support.</div>
                                             <div className="mt-6">
                                                  <Button className="w-full">Contact Sales</Button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </section>

                    {/* CTA */}

                    <section className="pb-28 pt-10">

                         <div className="mx-auto max-w-5xl px-6">

                              <div className="overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-500/10 via-zinc-900 to-black p-12 text-center">

                                   <h2 className="text-4xl font-bold tracking-tight md:text-5xl">

                                        Start building realtime experiences today

                                   </h2>

                                   <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">

                                        Launch interactive polls, track live audience insights,
                                        and create premium realtime engagement experiences.

                                   </p>

                                   <div className="mt-10">

                                        <Link to="/register">

                                             <Button
                                                  size="lg"
                                                  className="h-12 px-10 text-base bg-indigo-600 hover:bg-indigo-500"
                                             >
                                                  Launch PollZen
                                             </Button>

                                        </Link>

                                   </div>

                              </div>

                         </div>

                    </section>

               </main>

               <SiteFooter />
          </div>
     );
}