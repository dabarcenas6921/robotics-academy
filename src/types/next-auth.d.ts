import NextAuth from "next-auth";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface User {
    email: string;
    role: Role;
  }

  interface Session {
    user: User & {
      email: string;
      role: Role;
    };
    token: {
      email: string;
      role: Role;
    };
  }
}
