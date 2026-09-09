import {useEffect, useState,} from "react";
import { useParams } from "react-router-dom";

import { BarChart3,Vote,} from "lucide-react";
import { getPollAnalytics } from "@/services/analytics.service";
import PollPieChart from "@/components/charts/PollPieChart";
import PollBarChart from "@/components/charts/PollBarChart";

export default function PublicResultsPage() {
     const { pollId } = useParams();

     const [analytics, setAnalytics] = useState(null);

     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchResults = async () => {
                    try {
                         const response = await getPollAnalytics(pollId );

                         setAnalytics( response.data );
                    } catch (error) {
                         console.log(error);
                    } finally {
                         setLoading(false);
                    }
               };

          fetchResults();
     }, [pollId]);

     if (loading) return <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">Loading results...</div>;

     if (!analytics) return <div className="flex min-h-screen items-center justify-center bg-background text-destructive">Results unavailable</div>;

     return (
          <div className="min-h-screen bg-background p-6 text-foreground">
               <div className="mx-auto max-w-6xl space-y-10">
                    <div className="text-center">
                         <h1 className="text-5xl font-bold tracking-tight">
                              Poll Results
                         </h1>

                         <p className="mt-4 text-sm text-muted-foreground">Live public analytics and voting insights</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2">
                         <div className="rounded-3xl bg-card p-8">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <p className="text-sm text-muted-foreground">Total Responses</p>

                                        <h2 className="mt-3 text-5xl font-bold">
                                             {  analytics.poll?.totalResponses}
                                        </h2>
                                   </div>

                                   <div className="rounded-2xl bg-indigo-500/10 p-4 text-indigo-400">
                                        <Vote size={32} />
                                   </div>
                              </div>
                         </div>

                         <div className="rounded-3xl bg-card p-8">
                              <div className="flex items-center justify-between">
                                   <div>
                                        <p className="text-sm text-muted-foreground">Poll Status</p>

                                        <h2 className="mt-3 text-4xl font-bold capitalize">
                                             {analytics.poll?.status}
                                        </h2>
                                   </div>

                                   <div className="rounded-2xl bg-emerald-500/10 p-4 text-emerald-400">
                                        <BarChart3
                                             size={32}
                                        />
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="space-y-10">
                         {analytics.questions?.map(
                              (question) => (
                                   <div key={question.questionId} className="rounded-3xl bg-card p-8">
                                        <div className="mb-10">
                                             <h2 className="text-2xl font-bold">
                                                  {question.questionText}
                                             </h2>
                                        </div>

                                        <div className="grid gap-10 xl:grid-cols-2">
                                             <PollPieChart
                                                  data={question.options}/>

                                             <PollBarChart
                                                  data={question.options}
                                             />
                                        </div>

                                        <div className="mt-10 space-y-5">
                                             {question.options.map(
                                                  (option) => (
                                                       <div
                                                            key={ option.optionId }
                                                            className="space-y-2"
                                                       >
                                                            <div className="flex items-center justify-between">
                                                                 <span className="font-medium">
                                                                      {option.optionText }
                                                                 </span>

                                                                 <span className="text-sm text-muted-foreground">{option.count} votes ({option.percentage}%)</span>
                                                            </div>

                                                            <div className="h-3 overflow-hidden rounded-full bg-muted">
                                                                 <div
                                                                      className="h-full rounded-full bg-indigo-500 transition-all duration-500"
                                                                      style={{
                                                                           width: `${option.percentage}%`,
                                                                      }}
                                                                 />
                                                            </div>
                                                       </div>
                                                  )
                                             )}
                                        </div>
                                   </div>
                              )
                         )}
                    </div>
               </div>
          </div>
     );
}