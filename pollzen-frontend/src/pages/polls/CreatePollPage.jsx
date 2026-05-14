import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import {
     CalendarIcon,
     Plus,
} from "lucide-react";
import { toast } from "sonner";
import { createPollSchema } from "@/validations/poll.schema";
import { createPoll } from "@/services/poll.service";
import QuestionCard from "@/components/forms/QuestionCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
     Popover,
     PopoverContent,
     PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";

export default function CreatePollPage() {
     const [loading, setLoading] =
          useState(false);

     const {
          register,
          control,
          handleSubmit,
          setValue,
          watch,
          formState: { errors },
     } = useForm({
          resolver: zodResolver(
               createPollSchema
          ),

          defaultValues: {
               title: "",
               description: "",

               responseMode: "anonymous",

               expiresAt: "",

               questions: [
                    {
                         questionText: "",

                         required: true,

                         options: [
                              { text: "" },
                              { text: "" },
                         ],
                    },
               ],
          },
     });

     const {
          fields: questionFields,

          append: appendQuestion,

          remove: removeQuestion,
     } = useFieldArray({
          control,

          name: "questions",
     });

     const expiresAt = watch("expiresAt");

     const onSubmit = async (values) => {
          try {
               setLoading(true);

               await createPoll(values);

               toast.success(
                    "Poll created successfully"
               );
          } catch (error) {
               toast.error(
                    error?.response?.data?.message ||
                    "Failed to create poll"
               );
          } finally {
               setLoading(false);
          }
     };

     return (
          <div className="mx-auto max-w-5xl space-y-6">
               <div>
                    <h1 className="text-3xl font-bold tracking-tight">
                         Create Poll
                    </h1>

                    <p className="mt-2 text-zinc-400">
                         Build realtime interactive polls
                    </p>
               </div>

               <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-6"
               >
                    <Card className="border-zinc-800 bg-zinc-900">
                         <CardContent className="p-6 space-y-5">
                              <Input
                                   placeholder="Poll title"
                                   {...register("title")}
                                   className="bg-zinc-950 border-zinc-800"
                              />

                              <Textarea
                                   placeholder="Poll description"
                                   {...register("description")}
                                   className="bg-zinc-950 border-zinc-800"
                              />

                              <div className="grid gap-4 md:grid-cols-2">
                                   <select
                                        {...register("responseMode")}
                                        className="h-11 rounded-md border border-zinc-800 bg-zinc-950 px-3"
                                   >
                                        <option value="anonymous">
                                             Anonymous
                                        </option>

                                        <option value="authenticated">
                                             Authenticated
                                        </option>
                                   </select>

                                   <Popover>
                                        <PopoverTrigger asChild>
                                             <Button
                                                  type="button"
                                                  variant="outline"
                                                  className="justify-start border-zinc-800 bg-zinc-950"
                                             >
                                                  <CalendarIcon
                                                       size={16}
                                                  />

                                                  {expiresAt
                                                       ? format(
                                                            new Date(
                                                                 expiresAt
                                                            ),
                                                            "PPP"
                                                       )
                                                       : "Select expiry date"}
                                             </Button>
                                        </PopoverTrigger>

                                        <PopoverContent>
                                             <Calendar
                                                  mode="single"
                                                  selected={
                                                       expiresAt
                                                            ? new Date(
                                                                 expiresAt
                                                            )
                                                            : undefined
                                                  }
                                                  onSelect={(date) =>
                                                       setValue(
                                                            "expiresAt",
                                                            date.toISOString()
                                                       )
                                                  }
                                             />
                                        </PopoverContent>
                                   </Popover>
                              </div>
                         </CardContent>
                    </Card>

                    <div className="space-y-6">
                         {questionFields.map(
                              (question, questionIndex) => (
                                   <QuestionCard
                                        key={question.id}
                                        control={control}
                                        register={register}
                                        questionIndex={
                                             questionIndex
                                        }
                                        removeQuestion={
                                             removeQuestion
                                        }
                                   />
                              )
                         )}
                    </div>

                    <Button
                         type="button"
                         variant="secondary"
                         onClick={() =>
                              appendQuestion({
                                   questionText: "",

                                   required: true,

                                   options: [
                                        { text: "" },
                                        { text: "" },
                                   ],
                              })
                         }
                    >
                         <Plus size={16} />

                         Add Question
                    </Button>

                    <Button
                         disabled={loading}
                         type="submit"
                         className="w-full h-11"
                    >
                         {loading
                              ? "Creating Poll..."
                              : "Create Poll"}
                    </Button>
               </form>
          </div>
     );
}