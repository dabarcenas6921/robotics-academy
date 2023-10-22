import ForumNav from "../_components/ForumNav";
import ForumPostCard from "../_components/ForumPostCard";
import DiscussionTopics from "../_components/DiscussionTopics";

export default function Page() {
  return (
    <div>
      <ForumNav />
      <div className="flex">
        <div className="flex flex-col items-center gap-4 px-3 w-3/4">
          <ForumPostCard />
          <ForumPostCard />
          <ForumPostCard />
          <ForumPostCard />
        </div>
        <div className="w-1/4 bg-gray-50 border-gray-700">
          <DiscussionTopics />
        </div>
      </div>
    </div>
  );
}
