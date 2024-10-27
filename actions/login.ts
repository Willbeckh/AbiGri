"use server";
import z from "zod";
import { LoginSchema } from "@/schemas";
import { createClient } from "@/utils/supabase/server";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse({
    ...values,
  })

  if (!validatedFields.success) {
    return {
      error: true,
      message:
        validatedFields.error.issues[0]?.message ?? "An error occured",
    };
  }

  const { email, password } = validatedFields.data;

  // supabase auth api
    const supabase = await createClient();

    const { data, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      return {
        error: true,
        message: signInError.message,
      }
    }

    if(!data.user){
      return {
        error: true,
        message: "Login failed! Please try again.",
      }
    }
    
    return {
      success: true,
      message: "Login Successful",
      user: {
        id: data.user.id,
        email: data.user.email,
      }
    };
  
};