import { z } from "zod";

export const responseSchema = z.object({
     answers: z
          .array(
               z.object({
                    questionId: z.string(),

                    optionId: z.string(),
               })
          )
          .min(1),
});