import { z } from "zod";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

export const bookingFormSchema = z.object({
  name: z.string().min(3, "Name is required."),
  email: z.string().email("Please enter a valid email."),
  phone: z
    .string()
    .refine(isValidPhoneNumber, "Please include country code in number.")
    .transform((value) => parsePhoneNumber(value).number.toString()),
  date: z
    .date({
      required_error: "Please select a valid date.",
      invalid_type_error: "Invalid date format!",
    })
    .min(
      new Date(),
      "Hold on Time traveller. Dates can only be in present or future."
    ),
  numberOfGuests: z
    .number()
    .min(1, "Atleast 1 guest is required.")
    .max(10, "Maximum of 10 guests allowed!"),
});
