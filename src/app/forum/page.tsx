import ForumNav from "../_components/ForumNav";
import ForumPostCard from "../_components/ForumPostCard";
import DiscussionTopics from "../_components/DiscussionTopics";
import TopPosters from "../_components/TopPosters";

export default function Page() {
  return (
    <div>
      <ForumNav />
      <div className="flex flex-wrap">
        <div className="flex flex-col items-center gap-4 px-3 w-full md:w-3/4">
          <ForumPostCard id={1} />
          <ForumPostCard id={2} />
          <ForumPostCard id={3} />
          <ForumPostCard id={4} />
        </div>
        <div className="hidden md:block w-full md:w-1/4 bg-gray-50 border-gray-700">
          <DiscussionTopics />
          <TopPosters />
        </div>
      </div>
    </div>
  );
}
