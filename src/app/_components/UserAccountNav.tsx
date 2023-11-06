"use client";
import { signOut } from "next-auth/react";

export default function UserAccountNav() {
  return (
    <button
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/sign-in`,
        })
      }
      className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
    >
      Sign Out
    </button>
  );
}
