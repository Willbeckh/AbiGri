import { type EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";
import { supabase } from "@/utils/supabaseClient";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;
  const next = searchParams.get("next") ?? "/dashboard";

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      type,
      token_hash,
    });

    if (!error) {
      // Redirect the user to the specified URL or dashboard if successful
      return NextResponse.redirect(next);
    } else {
      console.error("Error during OTP verification:", error.message);
    }
  } else {
    console.error("Missing token_hash or type in the confirmation URL");
  }

  // Redirect to the login page if confirmation fails
  return NextResponse.redirect("/auth/login?message=Could not confirm email");
}
