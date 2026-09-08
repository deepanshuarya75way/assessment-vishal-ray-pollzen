import { z } from 'zod';

export const submitResponseSchema = z.object({
  params: z.object({
    pollId: z.string().length(24, 'Invalid Poll ID'),
  }),
  body: z.object({
    answers: z
      .array(
        z.object({
          questionId: z.string().length(24, 'Invalid Question ID'),
          optionId: z.string().length(24, 'Invalid Option ID'),
        })
      )
      .min(1, 'You must answer at least one question'),
    anonymousId: z.string().nullable(),
  }),
});
