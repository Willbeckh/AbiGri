import { z } from "zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

export const bookingFormSchema = z.object({
  name: z.string().min(3, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .refine(isValidPhoneNumber, "Please include country code in number.")
    .transform((value, ctx) => {
      const phoneNumber = parsePhoneNumber(value.toString(), {
        defaultCountry: "RW",
      });

      if (!phoneNumber?.isValid()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Invalid phone number",
        });
        return z.NEVER;
      }
      return phoneNumber.formatInternational();
    }),

  date: z.coerce
    .date({
      required_error: "Please select a valid date.",
      invalid_type_error: "Invalid date format!",
    })
    .min(new Date(), "Dates can only be in present or future."),

  numberOfGuests: z
    .number()
    .min(1, "Atleast 1 guest is required.")
    .max(10, "Maximum of 10 guests allowed!"),
});
