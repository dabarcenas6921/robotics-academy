import ForumNav from "../_components/ForumNav";
import ForumPostCard from "../_components/ForumPostCard";
import DiscussionTopics from "../_components/DiscussionTopics";
import { db } from "@/lib/db";
import { Poster } from "../_components/Poster";

export default async function Page() {
  const posts = await db.post.findMany({
    where: {
      isSpam: false, //Only non-spam posts are shown.
    },
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          createdAt: true,
          updatedAt: true,
        },
      },
      comments: true,
    },
  });

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
          {posts.map(
            (post: {
              id: string;
              title: string;
              content: string;
              createdAt: Date;
              category: string;
              user: {
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
              };
              comments: string | any[];
            }) => (
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
            )
          )}
        </div>
        <div className="hidden md:block w-full md:w-1/4">
          <DiscussionTopics />
        </div>
      </div>
    </div>
  );
}
