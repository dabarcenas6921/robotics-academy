import ForumNav from "@/app/_components/ForumNav";
import DiscussionTopics from "@/app/_components/DiscussionTopics";
import TopPosters from "@/app/_components/TopPosters";
import ForumPost from "@/app/_components/ForumPost";
import CommentsSection from "@/app/_components/CommentsSection";

export default function Page({ params }: { params: { post_id: number } }) {
  return (
    <div>
      <ForumNav />
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center gap-4 px-3 w-full md:w-3/4">
          <ForumPost name="John Doe" />
          <CommentsSection />
        </div>
        <div className="hidden md:block w-full md:w-1/4 bg-gray-50 border-gray-700">
          <DiscussionTopics />
          <TopPosters />
        </div>
      </div>
    </div>
  );
}
