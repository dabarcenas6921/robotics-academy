import React from "react";

interface PosterProps {
  name: string;
  postsCount: number;
}

export default function TopPosters() {
  return (
    <div className="flex flex-col rounded-xl shadow-slate-700/[.7] mx-auto w-full max-w-md p-4">
      <h2 className="font-bold text-lg mb-4">Top Posters</h2>
      <div className="flex flex-col rounded-md shadow-sm">
        <Poster name="Jane Doe" postsCount={500} />
        <Poster name="John Doe" postsCount={400} />
        <Poster name="Marco Polo" postsCount={200} />
      </div>
    </div>
  );
}

function Poster({ name, postsCount }: PosterProps) {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.length > 1
      ? names[0][0].toUpperCase() + names[1][0].toUpperCase()
      : names[0][0].toUpperCase();
  };

  return (
    <button
      type="button"
      className="py-3 px-4 inline-flex justify-between items-center gap-2 border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm w-full"
    >
      <div className="flex items-center">
        <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600">
          <span className="text-xs font-medium text-white leading-none">
            {getInitials(name)}
          </span>
        </span>
        <div className="ml-3">
          <h3 className="font-semibold text-gray-800">{name}</h3>
        </div>
      </div>
      <span className="inline-flex items-center py-1 px-2 rounded-full text-xs font-medium bg-blue-500 text-white">
        {postsCount}
      </span>
    </button>
  );
}
