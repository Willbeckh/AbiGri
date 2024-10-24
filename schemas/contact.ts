import * as z from "zod";

export const ContactSchema = z.object({
  name: z.string().min(3, "Name is required."),
  email: z.string().email("Email is required."),
  phone: z.string().min(10, "Phone is required."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(6, "Atleast 6 character(s) is required."),
});
