import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export default function AnalyticsStatCard({ title, value, icon: Icon,}) {
     return (
          <motion.div
               initial={{
                    opacity: 0,
                    y: 20,
               }}
               animate={{
                    opacity: 1,
                    y: 0,
               }}
          >
               <Card className="border-zinc-800 bg-zinc-900">
                    <CardContent className="flex items-center justify-between p-6">
                         <div>
                              <p className="text-sm text-zinc-400">
                                   {title}
                              </p>

                              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                                   {value}
                              </h2>
                         </div>

                         <div className="rounded-xl bg-indigo-500/10 p-3 text-indigo-400">
                              <Icon size={24} />
                         </div>
                    </CardContent>
               </Card>
          </motion.div>
     );
}