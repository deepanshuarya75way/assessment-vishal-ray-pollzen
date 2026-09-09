import { Link } from "react-router-dom";

import { Vote, BarChart3, PlusSquare, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { getMyPolls } from "@/services/poll.service";

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

// placeholder to be replaced by API
const emptyStats = [
  { title: "Total Polls", value: "—", icon: Vote },
  { title: "Total Responses", value: "—", icon: BarChart3 },
  { title: "Active Polls", value: "—", icon: Activity },
];

export default function DashboardPage() {
  const [polls, setPolls] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const res = await getMyPolls();
        setPolls(res.data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  const totalPolls = polls.length;
  const totalResponses = polls.reduce((s, p) => s + (p.totalResponses || 0), 0);
  const activePolls = polls.filter((p) => p.status === "active").length;

  const stats = [
    { title: "Total Polls", value: totalPolls, icon: Vote },
    { title: "Total Responses", value: totalResponses, icon: BarChart3 },
    { title: "Active Polls", value: activePolls, icon: Activity },
  ];

  const recentPolls = polls
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 5);

  return (
    <div className="space-y-8">
               <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                         <h1 className="text-3xl font-bold tracking-tight">
                              Dashboard
                         </h1>

                         <p className="mt-2 text-sm text-muted-foreground">Monitor realtime polling activity and audience engagement.</p>
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
                                   <Card>
                                        <CardContent className="flex items-center justify-between p-6">
                                             <div>
                                                  <p className="text-sm text-muted-foreground">{stat.title}</p>

                                                  <h2 className="mt-3 text-4xl font-bold tracking-tight">{stat.value}</h2>
                                             </div>

                                             <div className="rounded-2xl bg-primary/10 p-4 text-primary">
                                                  <Icon size={28} />
                                             </div>
                                        </CardContent>
                                   </Card>
                              </motion.div>
                         );
                    })}
               </div>

               <div className="grid gap-6 xl:grid-cols-3">
                    <Card className="xl:col-span-2">
                         <CardContent className="p-6">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <h2 className="text-xl font-semibold">
                                             Recent Polls
                                        </h2>

                                        <p className="mt-1 text-sm text-muted-foreground">Latest polling activity</p>
                                   </div>

                                   <Link to="/app/polls">
                                        <Button variant="secondary">
                                             View All
                                        </Button>
                                   </Link>
                              </div>

                              <div className="mt-6 space-y-4">
                                   {recentPolls.map((poll) => (
                                        <div key={poll._id} className="flex items-center justify-between rounded-2xl border p-4 bg-card">
                                             <div>
                                                  <h3 className="font-medium text-card-foreground">{poll.title}</h3>

                                                  <p className="mt-1 text-sm text-muted-foreground">{poll.totalResponses || 0} responses</p>
                                             </div>

                                             <div className={`rounded-full px-3 py-1 text-xs font-medium ${poll.status === 'active' ? 'bg-emerald-500/10 text-emerald-400' : poll.status === 'published' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-400'}`}>
                                                  {poll.status}
                                             </div>
                                        </div>
                                   ))}
                              </div>
                         </CardContent>
                    </Card>

                    <Card>
                         <CardContent className="p-6">
                              <h2 className="text-xl font-semibold">
                                   Quick Actions
                              </h2>

                              <p className="mt-1 text-sm text-muted-foreground">Jump into your workflow</p>

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