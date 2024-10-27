import React from "react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { LoginForm } from "@/components/auth/login-form";

const LoginPage = async () => {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("/dashboard");
  }
  return <LoginForm />;
};

export default LoginPage;
