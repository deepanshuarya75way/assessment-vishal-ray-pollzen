import { useFieldArray } from "react-hook-form";

import {
     Plus,
     Trash2,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { Switch } from "@/components/ui/switch";

import OptionInput from "./OptionInput";

export default function QuestionCard({
     control,
     register,
     questionIndex,
     removeQuestion,
}) {
     const {
          fields: optionFields,

          append: appendOption,

          remove: removeOption,
     } = useFieldArray({
          control,

          name: `questions.${questionIndex}.options`,
     });

     return (
          <Card className="border-zinc-800 bg-zinc-900">
               <CardContent className="p-6 space-y-5">
                    <div className="flex items-start justify-between gap-4">
                         <Input
                              placeholder="Enter question"
                              {...register(
                                   `questions.${questionIndex}.questionText`
                              )}
                              className="bg-zinc-950 border-zinc-800"
                         />

                         <Button
                              type="button"
                              size="icon"
                              variant="destructive"
                              onClick={() =>
                                   removeQuestion(questionIndex)
                              }
                         >
                              <Trash2 size={16} />
                         </Button>
                    </div>

                    <div className="flex items-center justify-between">
                         <p className="text-sm text-zinc-400">
                              Required Question
                         </p>

                         <Switch
                              {...register(
                                   `questions.${questionIndex}.required`
                              )}
                         />
                    </div>

                    <div className="space-y-3">
                         {optionFields.map(
                              (option, optionIndex) => (
                                   <OptionInput
                                        key={option.id}
                                        register={register}
                                        questionIndex={questionIndex}
                                        optionIndex={optionIndex}
                                        removeOption={removeOption}
                                   />
                              )
                         )}
                    </div>

                    <Button
                         type="button"
                         variant="secondary"
                         onClick={() =>
                              appendOption({
                                   text: "",
                              })
                         }
                    >
                         <Plus size={16} />

                         Add Option
                    </Button>
               </CardContent>
          </Card>
     );
}