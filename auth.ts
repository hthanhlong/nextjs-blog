import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";

export const handler = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({
            myUsername: z.string().email(),
            myPassword: z.string().min(6),
          })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          // const { email, password } = parsedCredentials.data;
          const user = "name";
          if (!user) return null;
        }

        return null;
      },
    }),
  ],
});
