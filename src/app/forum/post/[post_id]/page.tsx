import ForumNav from "@/app/_components/ForumNav";
import DiscussionTopics from "@/app/_components/DiscussionTopics";
import ForumPost from "@/app/_components/ForumPost";
import CommentsSection from "@/app/_components/CommentsSection";
import { db } from "@/lib/db";
import { Poster } from "@/app/_components/Poster";

export default async function Page({
  params,
}: {
  params: { post_id: string };
}) {
  const postInfo = await db.post.findFirst({
    where: { id: params.post_id },
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
        <div className="flex flex-col items-center gap-4 px-3 w-full md:w-3/4">
          {postInfo ? (
            <div className="w-full">
              <ForumPost
                id={postInfo.id}
                title={postInfo.title}
                content={postInfo.content}
                createdAt={postInfo.createdAt}
                category={postInfo.category}
                user={postInfo.user}
                commentsCount={postInfo.comments.length}
              />
              <CommentsSection />
            </div>
          ) : (
            <div className="text-2xl">Post not found</div>
          )}
        </div>
        <div className="hidden md:block w-full md:w-1/4">
          <DiscussionTopics />
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
        <div className="hidden md:block w-full md:w-1/4"></div>
      </div>
    </div>
  );
}
