export default function Comment() {
  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.length > 1
      ? names[0][0].toUpperCase() + names[1][0].toUpperCase()
      : names[0][0].toUpperCase();
  };

  return (
    <article className="py-4 text-base bg-white rounded-lg">
      <footer className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-gray-600">
              <span className="text-xs font-medium text-white leading-none">
                {getInitials("Michael Gough")}
              </span>
            </span>
            <div className="ml-3">
              <p className="font-semibold text-gray-800">Michael Gough</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 ml-3">
            <div>Feb. 8, 2022</div>
          </p>
        </div>
      </footer>
      <p className="text-gray-500">
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
      <div className="flex items-center mt-4 space-x-4">
        <button
          type="button"
          className="flex items-center text-sm text-gray-500 hover:underline font-medium"
        >
          <svg
            className="mr-1.5 w-3.5 h-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"
            />
          </svg>
          Reply
        </button>
      </div>
    </article>
  );
}
