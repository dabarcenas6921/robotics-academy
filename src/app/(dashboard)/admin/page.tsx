import AdminTable from "@/app/_components/admin-page/AdminTable";
import ErrorPage from "@/app/_components/ErrorPage";
import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (session?.user.role === "Admin") {
    const spamPosts = await db.post.findMany({
      where: { isSpam: true },
      select: {
        id: true,
        createdAt: true,
        category: true,
        content: true,
        title: true,
        user: {
          select: {
            name: true,
          },
        },
      },
    });

    return (
      <div>
        <h2 className="text-2xl font-semibold mb-5">
          Welcome back {session?.user.name}! Here is the latest spam report:
        </h2>
        <AdminTable spamPosts={spamPosts} />
      </div>
    );
  }

  return <ErrorPage />;
}
