import { Trash2 } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function OptionInput({ register, questionIndex, optionIndex, removeOption }) {
     
     return (
          <div className="flex items-center gap-2">
               <Input placeholder={`Option ${optionIndex + 1}`} {...register(`questions.${questionIndex}.options.${optionIndex}.text`)} className="h-10" />

               <Button
                    type="button"
                    size="icon"
                    variant="destructive"
                    onClick={() =>
                         removeOption(optionIndex)
                    }
               >
                    <Trash2 size={16} />
               </Button>
          </div>
     );
}