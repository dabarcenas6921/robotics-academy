import ErrorPage from "@/app/_components/ErrorPage";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2 className="text-2xl">
        Admin page - welcome back {session?.user.name}
      </h2>
    );
  }

  return <ErrorPage errorCode="403" />;
}
