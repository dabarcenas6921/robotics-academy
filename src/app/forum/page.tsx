import ForumNav from "../_components/ForumNav";
import ForumPostCard from "../_components/ForumPostCard";
import DiscussionTopics from "../_components/DiscussionTopics";
import TopPosters from "../_components/TopPosters";
import { db } from "@/lib/db";

export default async function Page() {
  const posts = await db.post.findMany({
    take: 10,
    orderBy: {
      createdAt: "desc",
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          // Do not select the password field
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
        <div className="hidden md:block w-full md:w-1/4">
          <TopPosters />
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
