"use client";

import * as z from "zod";
import { useState } from "react";
import { CardWrapper } from "./card-wrapper";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/useAuthStore";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const LoginForm = () => {
  const [serverError, setServerError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false); // Adds loading state
  const router = useRouter();

  const { login: setAuth } = useAuthStore();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // error handling refactor
  const handleError = (errorResponse: { error?: boolean; message: string }) => {
    setServerError(errorResponse.message ?? null);
  };

  // success handling
  const handleSuccess = (
    userData: { id: string; email: string | undefined } | undefined
  ) => {
    if (userData && userData.email) {
      // update auth store
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setAuth(userData);
      router.push("/products");
    } else {
      setServerError("User not available!");
    }
  };

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setServerError(null);
    setIsLoading(true);

    try {
      const response = await login({
        email: values.email,
        password: values.password,
      });

      if (response.error) {
        handleError(response);
      } else {
        handleSuccess(response.user);
      }

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setServerError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <CardWrapper
      headerLabel="Welcome back."
      backButtonLabel="Don't have an account? Sign up."
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="john.doe@me.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      disabled={isLoading}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {serverError && (
            <p className="text-red-500 text-sm mt-2">{serverError}</p>
          )}

          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading && <span className="loading loading-ring"></span>}
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
