import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z
    .string({
      message: "Digite um e-mail",
    })
    .email({
      message: "Digite um e-mail válido.",
    }),
});

export type ForgotPasswordSchemaType = z.infer<typeof forgotPasswordSchema>;
