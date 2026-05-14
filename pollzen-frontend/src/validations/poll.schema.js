import { z } from "zod";

const optionSchema = z.object({
     text: z
          .string()
          .min(1, "Option text is required"),
});

const questionSchema = z.object({
     questionText: z
          .string()
          .min(3, "Question is too short"),

     required: z.boolean(),

     options: z
          .array(optionSchema)
          .min(2, "At least 2 options required"),
});

export const createPollSchema = z.object({
     title: z
          .string()
          .min(3, "Title is required"),

     description: z
          .string()
          .min(10, "Description is too short"),

     responseMode: z.enum([
          "anonymous",
          "authenticated",
     ]),

     expiresAt: z.string(),

     questions: z
          .array(questionSchema)
          .min(1, "At least one question required"),
});