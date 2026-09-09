import { useEffect, useState,} from "react";
import { useParams } from "react-router-dom";

import { getPollById } from "@/services/poll.service";
import PollStatusBadge from "@/components/common/PollStatusBadge";
import { Card, CardContent } from "@/components/ui/card";

export default function PollDetailsPage() {
     const { pollId } = useParams();

     const [poll, setPoll] = useState(null);

     const [loading, setLoading] = useState(true);

     useEffect(() => {
          const fetchPoll = async () => {
               try {
                    const response = await getPollById(pollId);

                    setPoll(response.data);
               } catch (error) {
                    console.log(error);
               } finally {
                    setLoading(false);
               }
          };

          fetchPoll();
     }, [pollId]);

     if (loading) return <div className="text-muted-foreground">Loading poll...</div>;
     if (!poll) return <div className="text-destructive">Poll not found</div>;

     return (
          <div className="mx-auto max-w-4xl space-y-6">
               <div className="flex items-center justify-between">
                    <div>
                         <h1 className="text-3xl font-bold tracking-tight">
                              {poll.title}
                         </h1>

                         <p className="mt-2 text-muted-foreground">{poll.description}</p>
                    </div>

                    <PollStatusBadge status={poll.status} />
               </div>

               <div className="space-y-5">
                    {poll.questions?.map(
                         (question, index) => (
                              <Card key={question._id}>
                                   <CardContent className="p-6">
                                        <h2 className="font-semibold text-card-foreground">{index + 1}. {question.questionText}</h2>

                                        <div className="mt-4 space-y-3">
                                             {question.options?.map((option) => (
                                                  <div key={option._id} className="rounded-xl border p-3 bg-card text-card-foreground">{option.text}</div>
                                             ))}
                                        </div>
                                   </CardContent>
                              </Card>
                         )
                    )}
               </div>
          </div>
     );
}