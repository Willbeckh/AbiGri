import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "@/data/user";
import { LoginSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import { ZodError } from "zod";

export default {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const { email, password } = await LoginSchema.parseAsync(credentials);

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          // Check if passwords match
          const passwordsMatch = await bcrypt.compare(password, user.password);
          if (!passwordsMatch) return null;

          // Return the user if credentials are valid
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            phone: user.phone,
            emailVerified: user.emailVerified,
            image: user.image,
          };
        } catch (error) {
          if (error instanceof ZodError) {
            return null; // Validation errors result in login failure
          }
          throw error; // Rethrow other unexpected errors
        }
      },
    }),
  ],
} satisfies NextAuthConfig;
