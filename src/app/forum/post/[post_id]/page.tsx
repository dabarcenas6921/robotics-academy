import ForumNav from "@/app/_components/ForumNav";
import DiscussionTopics from "@/app/_components/DiscussionTopics";
import TopPosters from "@/app/_components/TopPosters";
import ForumPost from "@/app/_components/ForumPost";
import CommentsSection from "@/app/_components/CommentsSection";
import { db } from "@/lib/db";

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
          <TopPosters />
        </div>
      </div>
    </div>
  );
}
