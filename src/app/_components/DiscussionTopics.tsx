import db from "@/lib/db";
import Tab from "./Tab";

export default async function DiscussionTopics() {
  const bgColors = ["green", "blue", "yellow", "purple", "red", "teal"];

  const allCategories = await db.post.groupBy({
    by: ["category"],
    orderBy: { category: "asc" },
    _count: {
      category: true,
    },
  });

  return (
    <div className="flex flex-col rounded-xl  shadow-slate-700/[.7] mx-auto w-full max-w-md p-4">
      <h2 className="font-bold text-lg mb-4">Discussion Topics</h2>
      <div className="flex flex-col rounded-md shadow-sm">
        <Tab label="All Discussions"></Tab>
        {allCategories.map((category, index) => (
          <Tab
            key={index}
            label={category.category}
            color={`bg-${bgColors[index]}-500`}
            count={category._count.category}
          />
        ))}
      </div>
    </div>
  );
}
