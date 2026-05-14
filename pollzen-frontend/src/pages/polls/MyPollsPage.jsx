import { useEffect, useState } from "react";

import { getMyPolls } from "@/services/poll.service";

import PollCard from "@/components/common/PollCard";

import PollCardSkeleton from "@/components/common/PollCardSkeleton";

export default function MyPollsPage() {
     const [polls, setPolls] = useState([]);

     const [loading, setLoading] =
          useState(true);

     const fetchPolls = async () => {
          try {
               setLoading(true);

               const response =
                    await getMyPolls();

               setPolls(response.data || []);
          } catch (error) {
               console.log(error);
          } finally {
               setLoading(false);
          }
     };

     useEffect(() => {
          fetchPolls();
     }, []);

     return (
          <div className="space-y-6">
               <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                         My Polls
                    </h1>

                    <p className="mt-2 text-zinc-400">
                         Manage your realtime polls
                    </p>
               </div>

               {loading ? (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                         {Array.from({
                              length: 6,
                         }).map((_, index) => (
                              <PollCardSkeleton
                                   key={index}
                              />
                         ))}
                    </div>
               ) : polls.length === 0 ? (
                         <div className="flex h-96 items-center justify-center rounded-3xl border border-dashed border-zinc-800 bg-zinc-900/50">
                              <div className="max-w-sm text-center">
                                   <h2 className="text-2xl font-bold">
                                        No polls created yet
                                   </h2>

                                   <p className="mt-3 leading-7 text-zinc-400">
                                        Start building interactive realtime polls and collect audience insights instantly.
                                   </p>
                              </div>
                         </div>
               ) : (
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                         {polls.map((poll) => (
                              <PollCard
                                   key={poll._id}
                                   poll={poll}
                                   refetchPolls={fetchPolls}
                              />
                         ))}
                    </div>
               )}
          </div>
     );
}