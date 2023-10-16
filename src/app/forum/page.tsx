import ForumNav from "../_components/ForumNav";
import ForumPostCard from "../_components/ForumPostCard";

export default function Page() {
  return (
    <div>
      <ForumNav />
      <div className="flex flex-col items-center gap-4 px-3">
        <ForumPostCard />
        <ForumPostCard />
        <ForumPostCard />
        <ForumPostCard />
      </div>
    </div>
  );
}
