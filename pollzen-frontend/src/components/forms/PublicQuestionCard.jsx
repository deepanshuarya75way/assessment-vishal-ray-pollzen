
// question card
export default function PublicQuestionCard({question, answers,  setAnswers,}) {
     const handleSelect = (questionId,optionId) => {
          const filtered = answers.filter( (answer) => answer.questionId !== questionId);

          setAnswers([
               ...filtered,
               {
                    questionId,
                    optionId,
               },
          ]);
     };

     return (
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
               <div className="flex items-start justify-between gap-4">
                    <h2 className="text-lg font-semibold">
                         {question.questionText}
                    </h2>

                    {question.required && (
                         <span className="text-sm text-red-400">
                              Required
                         </span>
                    )}
               </div>

               <div className="mt-5 space-y-3">
                    {question.options?.map(
                         (option) => {
                              const selected =
                                   answers.some(
                                        (answer) =>
                                             answer.questionId ===
                                             question._id &&
                                             answer.optionId ===
                                             option._id
                                   );

                              return (
                                   <button
                                        key={option._id}
                                        type="button"
                                        onClick={() =>
                                             handleSelect(
                                                  question._id,
                                                  option._id
                                             )
                                        }
                                        className={`w-full rounded-xl border p-4 text-left transition-all ${selected
                                                  ? "border-indigo-500 bg-indigo-500/10"
                                                  : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                                             }`}
                                   >
                                        <div className="flex items-center gap-3">
                                             <div
                                                  className={`h-4 w-4 rounded-full border ${selected
                                                            ? "border-indigo-500 bg-indigo-500"
                                                            : "border-zinc-600"
                                                       }`}
                                             />

                                             <span>
                                                  {option.text}
                                             </span>
                                        </div>
                                   </button>
                              );
                         }
                    )}
               </div>
          </div>
     );
}