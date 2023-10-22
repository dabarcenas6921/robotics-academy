import { BsChatSquareDots, BsThreeDots, BsShare } from "react-icons/bs"; // Importing required icons

export default function ForumPostCard() {
  return (
    <div className="flex flex-col border shadow-sm rounded-xl bg-gray-50 border-gray-700 shadow-slate-700/[.7] w-full">
      <div className="p-4 md:p-7">
        <div className="flex items-center">
          <div className="r-2 relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 md:flex hidden mr-2">
            <span className="font-medium text-gray-300">DB</span>
          </div>
          <p className="text-xs text-gray-500">
            By:
            <span className="font-semibold"> David Barcenas</span> | Posted 2
            Days Ago
          </p>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <h3 className="text-lg font-bold text-gray-800 ">Forum Post Title</h3>
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
            Industrial Robotics
          </span>
        </div>
        <p className="mt-2 text-gray-600">Example post content here...</p>
        <div className="mt-4 flex items-center gap-x-8">
          <button className="flex items-center gap-1 bg-transparent border-none">
            <BsChatSquareDots />
            12 Comments
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
