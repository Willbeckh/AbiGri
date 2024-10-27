"use server";
import z from "zod";
import { RegisterSchema } from "@/schemas";
import { createClient } from "@/utils/supabase/server";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: true,
      message: validatedFields.error.issues[0]?.message ?? "An error occured",
    };
  }

  const { email, password, name } = validatedFields.data;

  // Create user using Supabase Auth API
  const supabase = await createClient();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (signUpError) {
    return {
      error: true,
      message: signUpError.message,
    };
  }

  // if (values.email ) {
  // return {
  //   error: true,
  //   message: "Email already in use",
  // };
  // }

  return {
    success: "Sign Up successful! Please very email.",
  };
};
