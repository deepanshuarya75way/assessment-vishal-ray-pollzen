import { Link } from "react-router-dom";

import {
     Vote,
     BarChart3,
     PlusSquare,
     Activity,
} from "lucide-react";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

import { Card, CardContent } from "@/components/ui/card";

const stats = [
     {
          title: "Total Polls",
          value: "12",
          icon: Vote,
     },

     {
          title: "Total Responses",
          value: "1,284",
          icon: BarChart3,
     },

     {
          title: "Active Polls",
          value: "5",
          icon: Activity,
     },
];

const recentPolls = [
     {
          id: 1,
          title: "Frontend Framework Survey",
          responses: 240,
          status: "active",
     },

     {
          id: 2,
          title: "Remote Work Feedback",
          responses: 180,
          status: "published",
     },

     {
          id: 3,
          title: "Hackathon Participation Poll",
          responses: 95,
          status: "closed",
     },
];

export default function DashboardPage() {
     return (
          <div className="space-y-8">
               <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                         <h1 className="text-3xl font-bold tracking-tight">
                              Dashboard
                         </h1>

                         <p className="mt-2 text-zinc-400">
                              Monitor realtime polling activity and audience engagement.
                         </p>
                    </div>

                    <Link to="/app/polls/create">
                         <Button className="h-11">
                              <PlusSquare size={18} />

                              Create Poll
                         </Button>
                    </Link>
               </div>

               <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {stats.map((stat, index) => {
                         const Icon = stat.icon;

                         return (
                              <motion.div
                                   key={stat.title}
                                   initial={{
                                        opacity: 0,
                                        y: 20,
                                   }}
                                   animate={{
                                        opacity: 1,
                                        y: 0,
                                   }}
                                   transition={{
                                        delay: index * 0.1,
                                   }}
                              >
                                   <Card className="border-zinc-800 bg-zinc-900">
                                        <CardContent className="flex items-center justify-between p-6">
                                             <div>
                                                  <p className="text-sm text-zinc-400">
                                                       {stat.title}
                                                  </p>

                                                  <h2 className="mt-3 text-4xl font-bold tracking-tight">
                                                       {stat.value}
                                                  </h2>
                                             </div>

                                             <div className="rounded-2xl bg-indigo-500/10 p-4 text-indigo-400">
                                                  <Icon size={28} />
                                             </div>
                                        </CardContent>
                                   </Card>
                              </motion.div>
                         );
                    })}
               </div>

               <div className="grid gap-6 xl:grid-cols-3">
                    <Card className="border-zinc-800 bg-zinc-900 xl:col-span-2">
                         <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <h2 className="text-xl font-semibold">
                                             Recent Polls
                                        </h2>

                                        <p className="mt-1 text-sm text-zinc-400">
                                             Latest polling activity
                                        </p>
                                   </div>

                                   <Link to="/app/polls">
                                        <Button variant="secondary">
                                             View All
                                        </Button>
                                   </Link>
                              </div>

                              <div className="mt-6 space-y-4">
                                   {recentPolls.map((poll) => (
                                        <div
                                             key={poll.id}
                                             className="flex items-center justify-between rounded-2xl border border-zinc-800 bg-zinc-950 p-4"
                                        >
                                             <div>
                                                  <h3 className="font-medium">
                                                       {poll.title}
                                                  </h3>

                                                  <p className="mt-1 text-sm text-zinc-400">
                                                       {poll.responses} responses
                                                  </p>
                                             </div>

                                             <div
                                                  className={`rounded-full px-3 py-1 text-xs font-medium ${poll.status ===
                                                            "active"
                                                            ? "bg-emerald-500/10 text-emerald-400"
                                                            : poll.status ===
                                                                 "published"
                                                                 ? "bg-indigo-500/10 text-indigo-400"
                                                                 : "bg-red-500/10 text-red-400"
                                                       }`}
                                             >
                                                  {poll.status}
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </CardContent>
                    </Card>

                    <Card className="border-zinc-800 bg-zinc-900">
                         <CardContent className="p-6">
                              <h2 className="text-xl font-semibold">
                                   Quick Actions
                              </h2>

                              <p className="mt-1 text-sm text-zinc-400">
                                   Jump into your workflow
                              </p>

                              <div className="mt-6 space-y-4">
                                   <Link to="/app/polls/create">
                                        <Button className="h-11 w-full justify-start">
                                             <PlusSquare size={18} />

                                             Create New Poll
                                        </Button>
                                   </Link>

                                   <Link to="/app/polls">
                                        <Button
                                             variant="secondary"
                                             className="h-11 w-full justify-start"
                                        >
                                             <Vote size={18} />

                                             Manage Polls
                                        </Button>
                                   </Link>

                                   <Link to="/app/dashboard">
                                        <Button
                                             variant="secondary"
                                             className="h-11 w-full justify-start"
                                        >
                                             <BarChart3 size={18} />

                                             Analytics Overview
                                        </Button>
                                   </Link>
                              </div>
                         </CardContent>
                    </Card>
               </div>
          </div>
     );
}