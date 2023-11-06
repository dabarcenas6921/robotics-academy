"use client";
import { useSession } from "next-auth/react";

//Optional: You can use this component to display the user's session if you would like to test.

export default function User() {
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
}
