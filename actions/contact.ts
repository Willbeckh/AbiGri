"use server";
import * as z from "zod";
import { ContactSchema } from "@/schemas/contact";

export const contactSubmit = async (values: z.infer<typeof ContactSchema>) => {
  const validatedFields = ContactSchema.safeParse(values);

  try {
    const response = await fetch("https://formspree.io/f/xldedarg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      throw new Error("Failed to submit the form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }

  if (!validatedFields.success) {
    return {
      error: "Error Sending message! Try again later.",
    };
  }

  return { success: "Message sent Successfully" };
};
