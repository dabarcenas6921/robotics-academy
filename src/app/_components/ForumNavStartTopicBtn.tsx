"use client";
import { useEffect } from "react";
import NewTopicForm from "./form/NewTopicForm";

export default function ForumNavStartTopicBtn() {
  useEffect(() => {
    require("preline");
  }, []);

  return (
    <div>
      <button
        type="button"
        className="py-2 sm:py-3 px-3 sm:px-4 w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-gold shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-sm sm:text-md flex-shrink-0"
        data-hs-overlay="#hs-new-topic-modal"
      >
        Start a new topic
      </button>
      <NewTopicForm />
    </div>
  );
}
