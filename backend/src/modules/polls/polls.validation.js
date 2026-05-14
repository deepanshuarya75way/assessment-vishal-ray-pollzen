import { z } from 'zod';

export const createPollSchema = z.object({
     body: z.object({
          title: z.string().min(3, "Title too short").max(100).trim(),
          description: z.string().max(500).optional(),
          responseMode: z.enum(['anonymous', 'authenticated']).default('anonymous'),
          expiresAt: z.string().refine((val) => new Date(val) > new Date(), {
               message: "Expiry date must be in the future",
          }),
          questions: z.array(
               z.object({
                    questionText: z.string().min(1, "Question text required").trim(),
                    required: z.boolean().default(false),
                    options: z.array(
                         z.object({ text: z.string().min(1, "Option text required").trim() })
                    ).min(2, "Each question needs at least 2 options"),
               })
          ).min(1, "At least one question is required"),
     }),
});