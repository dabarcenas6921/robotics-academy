"use client";
import { db } from "@/lib/db";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function AdminTableDropdown({ postId }: { postId: string }) {
  const router = useRouter();

  useEffect(() => {
    require("preline");
  }, []);

  async function handlePostDelete() {
    //Mark the post as not spam in the database
    const response = await fetch("/api/posts/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: postId }),
    });

    if (response.ok) {
      toast.success("Post deleted successfully!");
      router.refresh();
    } else {
      toast.error("An error occurred when deleting the post!");
    }
  }

  async function handlePostRecover() {
    //Mark the post as not spam in the database
    const response = await fetch("/api/posts/recover", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ postId: postId }),
    });

    if (response.ok) {
      toast.success("Post recovered successfully!");
      router.refresh();
    } else {
      toast.error("An error occurred when recovering the post!");
    }
  }

  return (
    <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
      <button
        id="hs-dropdown-basic"
        type="button"
        className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-210 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
      >
        <svg
          className="hs-dropdown-open:rotate-180 w-4 h-4 text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div
        className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg p-2"
        aria-labelledby="hs-dropdown-basic"
      >
        <button
          onClick={() => handlePostDelete()}
          className="flex items-center w-full gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          Delete Spam Post
        </button>
        <button
          onClick={() => handlePostRecover()}
          className="flex items-center w-full gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        >
          Recover Post
        </button>
      </div>
    </div>
  );
}
