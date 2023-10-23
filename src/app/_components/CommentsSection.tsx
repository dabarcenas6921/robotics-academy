import Comment from "./Comment";

export default function CommentSection() {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold">Comments (20)</h2>
      <form className="my-3">
        <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
            placeholder="Write a comment..."
            rows={6}
            required
          ></textarea>
        </div>
        <button
          type="button"
          className="py-2 sm:py-3 px-3 sm:px-4 w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-gold shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-sm sm:text-md flex-shrink-0"
        >
          Post Comment
        </button>
      </form>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
}
