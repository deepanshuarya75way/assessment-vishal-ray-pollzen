import {
     useEffect,
     useState,
} from "react";

import { useParams } from "react-router-dom";

import { toast } from "sonner";

import { getPollById } from "@/services/poll.service";

import {
     submitResponse,
     checkVoteStatus,
} from "@/services/response.service";

import PublicQuestionCard from "@/components/forms/PublicQuestionCard";

import { Button } from "@/components/ui/button";

export default function PublicPollPage() {
     const { pollId } = useParams();

     const [poll, setPoll] = useState(null);

     const [loading, setLoading] =
          useState(true);

     const [submitting, setSubmitting] =
          useState(false);

     const [alreadyVoted, setAlreadyVoted] =
          useState(false);

     const [answers, setAnswers] =
          useState([]);

     useEffect(() => {
          const initializePage = async () => {
               try {
                    const pollResponse =
                         await getPollById(pollId);
                   
                    setPoll(pollResponse.data.poll);

                    const anonymousId =
                         localStorage.getItem(
                              "anonymousId"
                         );

                    if (anonymousId) {
                         const statusResponse =
                              await checkVoteStatus(
                                   pollId,
                                   anonymousId
                              );

                         setAlreadyVoted(
                              statusResponse.data
                                   ?.alreadyVoted
                         );
                    }
               } catch (error) {
                    console.log(error);
               } finally {
                    setLoading(false);
               }
          };

          initializePage();
     }, [pollId]);

     const validateAnswers = () => {
          const requiredQuestions =
               poll.questions.filter(
                    (q) => q.required
               );

          for (const question of requiredQuestions) {
               const answered =
                    answers.some(
                         (answer) =>
                              answer.questionId ===
                              question._id
                    );

               if (!answered) {
                    toast.error(
                         `Please answer: ${question.questionText}`
                    );

                    return false;
               }
          }

          return true;
     };

     const handleSubmit = async () => {
          try {
               if (!validateAnswers()) return;

               setSubmitting(true);

               const anonymousId =
                    localStorage.getItem(
                         "anonymousId"
                    );

               const response =
                    await submitResponse(
                         pollId,
                         {
                              anonymousId,

                              answers,
                         }
                    );

               if (
                    response.data?.anonymousId
               ) {
                    localStorage.setItem(
                         "anonymousId",
                         response.data
                              .anonymousId
                    );
               }

               toast.success(
                    "Response submitted successfully"
               );

               setAlreadyVoted(true);
          } catch (error) {
               toast.error(
                    error?.response?.data
                         ?.message ||
                    "Failed to submit response"
               );
          } finally {
               setSubmitting(false);
          }
     };

     if (loading) {
          return (
               <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
                    Loading poll...
               </div>
          );
     }

     if (!poll) {
          return (
               <div className="flex min-h-screen items-center justify-center bg-zinc-950 text-red-500">
                    Poll not found
               </div>
          );
     }

     if (alreadyVoted) {
          return (
               <div className="flex min-h-screen items-center justify-center bg-zinc-950 p-6 text-white">
                    <div className="w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
                         <h1 className="text-3xl font-bold">
                              Already Submitted
                         </h1>

                         <p className="mt-3 text-zinc-400">
                              You already responded
                              to this poll
                         </p>
                    </div>
               </div>
          );
     }

     return (
          <div className="min-h-screen bg-zinc-950 p-6 text-white">
               <div className="mx-auto max-w-4xl space-y-8">
                    <div>
                         <h1 className="text-4xl font-bold tracking-tight">
                              {poll.title}
                         </h1>

                         <p className="mt-3 text-zinc-400">
                              {poll.description}
                         </p>
                    </div>

                    <div className="space-y-6">
                         {poll.questions?.map(
                              (question) => (
                                   <PublicQuestionCard
                                        key={question._id}
                                        question={question}
                                        answers={answers}
                                        setAnswers={setAnswers}
                                   />
                              )
                         )}
                    </div>

                    <Button
                         disabled={submitting}
                         onClick={handleSubmit}
                         className="h-11 w-full"
                    >
                         {submitting
                              ? "Submitting..."
                              : "Submit Response"}
                    </Button>
               </div>
          </div>
     );
}