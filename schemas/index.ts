import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email("Email is required."),
  password: z.string().min(4, "Password is required."),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, "Name is required."),
  email: z.string().email("Email is required."),
  password: z.string().min(8, "Minimum 8 characters required!"),
});
