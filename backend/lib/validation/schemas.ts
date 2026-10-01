import { z } from "zod";

export const QuizSubmissionSchema = z.object({
  scenarioId: z.number().int().positive(),

  answers: z
    .array(
      z.object({
        questionId: z.number().int().positive(),
        optionId: z.number().int().positive(),
      })
    )
    .min(1),
});

export const ChatRequestSchema = z.object({
  sessionId: z.string().uuid().optional(),

  message: z
    .string()
    .trim()
    .min(1)
    .max(4000),
});