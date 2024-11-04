"use client";

import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";

import { createClient } from "@/utils/supabase/client";
import { toast } from "@/hooks/use-toast";

export const Social = () => {
  const [isGoogleLoading, setIsGoogleLoading] = useState<boolean>(false);
  const supabase = createClient();

  const searchParams = useSearchParams();

  const next = searchParams.get("next");

  async function signInWithGoogle() {
    setIsGoogleLoading(true);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback${
            next ? `?next=${encodeURIComponent(next)}` : ""
          }`,
        },
      });

      if (error) {
        throw error;
      }

      // update state
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError) {
        throw sessionError;
      }

      // ensure session is availabel
      const userData = {
        id: session?.user.id ?? "",
        email: session?.user.email ?? "",
      };

      // update state(zustand store) with user info
      useAuthStore.getState().login(userData);
    } catch (error) {
      console.error(error);
      toast({
        title: "Please try again.",
        description: "There was an error signing in.",
        variant: "destructive",
      });
    } finally {
      setIsGoogleLoading(false);
    }
  }

  return (
    <div className="w-screen">
      <div className="divider w-4/5 mx-auto text-xs text-muted-foreground">
        Or sign in with
      </div>
      <div className="flex items-center w-full">
        <Button
          variant="outline"
          className="w-full"
          onClick={signInWithGoogle}
          disabled={isGoogleLoading}
        >
          {isGoogleLoading && <span className="loading loading-ring"></span>}
          Google <FcGoogle size={40} />
        </Button>
      </div>
    </div>
  );
};
