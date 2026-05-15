import {useEffect,useState,useCallback,} from "react";
import { useParams } from "react-router-dom";
import { Vote, Activity } from "lucide-react";

import { getPollAnalytics } from "@/services/analytics.service";
import usePollRealtime from "@/hooks/usePollRealtime";
import AnalyticsStatCard from "@/components/charts/AnalyticsStatCard";
import QuestionAnalyticsCard from "@/components/charts/QuestionAnalyticsCard";

export default function AnalyticsPage() {
     const { pollId } = useParams();

     const [analytics, setAnalytics] = useState(null);

     const [loading, setLoading] = useState(true);

     // fetch analytics
     const fetchAnalytics = useCallback(async () => {
               try {
                    const response =await getPollAnalytics(pollId);

                    setAnalytics(response.data);
               } catch (error) {
                    console.log(error);
               } finally {
                    setLoading(false);
               }
          }, [pollId]);

     useEffect(() => { fetchAnalytics(); }, [fetchAnalytics]);

     usePollRealtime({ pollId, onUpdate: fetchAnalytics, });

     // if loading
     if (loading) {
          return (
               <div className="text-zinc-400">
                    Loading analytics...
               </div>
          );
     }

     // not analytics
     if (!analytics) {
          return (
               <div className="text-red-500">
                    Analytics unavailable
               </div>
          );
     }

     return (
          <div className="space-y-8">
               <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                         Analytics Dashboard
                    </h1>

                    <p className="mt-2 text-zinc-400">
                         Realtime poll insights
                    </p>
               </div>

               <div className="grid gap-6 md:grid-cols-2">
                    <AnalyticsStatCard
                         title="Total Responses"
                         value={
                              analytics.poll
                                   ?.totalResponses
                         }
                         icon={Vote}
                    />

                    <AnalyticsStatCard
                         title="Poll Status"
                         value={
                              analytics.poll?.status
                         }
                         icon={Activity}
                    />
               </div>

               <div className="space-y-8">
                    {analytics.questions?.map(
                         (question) => (
                              <QuestionAnalyticsCard
                                   key={question.questionId }
                                   question={question}
                              />
                         )
                    )}
               </div>
          </div>
     );
}