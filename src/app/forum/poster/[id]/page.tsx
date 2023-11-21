import DiscussionTopics from "@/app/_components/DiscussionTopics";
import ErrorPage from "@/app/_components/ErrorPage";
import ForumNav from "@/app/_components/ForumNav";
import ForumPostCard from "@/app/_components/ForumPostCard";
import { Poster } from "@/app/_components/Poster";
import db from "@/lib/db";

export default async function page({ params }: { params: { id: string } }) {
  const userPosts = await db.user.findUnique({
    where: { id: params.id },
    select: { posts: { include: { user: true, comments: true } } },
  });

  if (!userPosts || userPosts.posts.length === 0) {
    return <ErrorPage errorCode="404" />;
  }

  const posts = userPosts?.posts;

  const queryResult = await db.user.findMany({
    orderBy: { posts: { _count: "asc" } },
    include: { _count: { select: { posts: true } } },
  });

  const topPosters = queryResult.filter((user) => {
    return user._count.posts > 0;
  });

  return (
    <div>
      <ForumNav />
      <div className="flex flex-wrap">
        <div className="hidden md:block w-full md:w-1/4">
          <div className="flex flex-col rounded-xl shadow-slate-700/[.7] mx-auto w-full max-w-md p-4">
            <h2 className="font-bold text-lg mb-4">Top Posters</h2>
            <div className="flex flex-col rounded-md shadow-sm">
              {topPosters.map((user) => (
                <Poster
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  postsCount={user._count.posts}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4 px-3 w-full md:w-1/2">
          {posts.map((post) => (
            <ForumPostCard
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              createdAt={post.createdAt}
              category={post.category}
              user={post.user}
              commentsCount={post.comments.length}
            />
          ))}
        </div>
        <div className="hidden md:block w-full md:w-1/4">
          <DiscussionTopics />
        </div>
      </div>
    </div>
  );
}
