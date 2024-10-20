import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is required."),
  password: z.string().min(4, "Password is required."),
});
