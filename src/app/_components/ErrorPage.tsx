import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="w-full flex h-full justify-center items-center">
      <div className="max-w-[50rem] flex flex-col mx-auto w-full h-full">
        <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
          <h1 className="block text-7xl font-bold text-black sm:text-9xl ">
            404
          </h1>
          <p className="mt-3 text-gray-600 ">
            You don&apos;t have access to this page.
          </p>
          <p className="text-gray-600 ">Please log in to continue.</p>
          <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
            <Link
              href="/sign-in"
              passHref
              className="py-2 sm:py-3 px-3 sm:px-4 w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-gold shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-sm sm:text-md flex-shrink-0"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
