import { BsChatSquareDots, BsThreeDots, BsShare } from "react-icons/bs";
import Link from "next/link";
import ForumPostCardProps from "@/interfaces/ForumPostCardProps.interface";
import { formatDistanceToNow } from "date-fns"; // For displaying relative time

export default function ForumPostCard({
  id,
  title,
  content,
  createdAt,
  category,
  user,
  commentsCount,
}: ForumPostCardProps) {
  // Format the creation date to display relative time (e.g., 2 days ago)
  const timeAgo = formatDistanceToNow(new Date(createdAt), { addSuffix: true });

  const getInitials = (name: string) => {
    const names = name.split(" ");
    const initials = names.map((n) => n[0]).join("");
    return initials.length > 1 ? initials.substring(0, 2) : initials; // Take only the first two initials
  };

  return (
    <div className="flex flex-col border shadow-sm rounded-xl bg-gray-50 border-gray-700 shadow-slate-700/[.7] w-full">
      <div className="p-4 md:p-7">
        <div className="flex items-center">
          <div className="r-2 relative  items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 md:flex hidden mr-2">
            <span className="font-medium text-gray-300">
              {getInitials(user.name)}
            </span>
          </div>
          <p className="text-xs text-gray-500">
            By:
            <span className="font-semibold"> {user.name}</span> | Posted{" "}
            {timeAgo}
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-800 ">
            <Link href={`/forum/post/${id}`}>{title}</Link>
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${categoryColor(
              category
            )} text-white`}
          >
            {formatCategoryName(category)}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{content}</p>
        <div className="mt-4 flex items-center gap-x-8">
          <button className="flex items-center gap-1 bg-transparent border-none">
            <BsChatSquareDots />
            {commentsCount} Comments
          </button>
          <button className="flex items-center gap-1 bg-transparent border-none">
            <BsShare />
            Share
          </button>
          <button className="flex items-center gap-1 bg-transparent border-none">
            <BsThreeDots />
          </button>
        </div>
      </div>
    </div>
  );
}

function categoryColor(category: string) {
  switch (category) {
    case "Automation":
      return "bg-green-500";
    case "Certificates":
      return "bg-blue-500";
    case "Courses":
      return "bg-yellow-500";
    case "ImmersiveLearning":
      return "bg-purple-500";
    case "IndustrialRobotics":
      return "bg-red-500";
    case "Other":
      return "bg-teal-500";
    default:
      return "bg-gray-500"; // A default case if the category doesn't match
  }
}

function formatCategoryName(category: string) {
  if (category === "ImmersiveLearning") {
    return "Immersive Learning";
  } else if (category === "IndustrialRobotics") {
    return "Industrial Robotics";
  } else {
    return category;
  }
}
