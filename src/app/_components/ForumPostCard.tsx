export default function ForumPostCard() {
  return (
    <div className="max-w-[85rem] flex flex-col border shadow-sm rounded-xl bg-gray-100 border-gray-700 shadow-slate-700/[.7] w-full">
      <div className="p-4 md:p-7">
        <h3 className="text-lg font-bold text-gray-800 ">Forum Post Title</h3>
        <p className="mt-2 text-gray-600">Example post content here...</p>
        <p className="mt-2">
          By:
          <span className="font-semibold"> David Barcenas</span> | Posted 2 Days
          Ago
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-500 text-white">
          Industrial Robotics
        </span>
      </div>
    </div>
  );
}
