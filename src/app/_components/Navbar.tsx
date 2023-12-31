import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { Dropdown, DropdownHeader } from "flowbite-react";

export default async function Navbar() {
  const session = await getServerSession(authOptions);

  return (
    <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-white text-sm py-4">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 md:flex md:items-center md:justify-between"
        aria-label="Global"
      >
        <div className="w-full flex items-center justify-between">
          <Link
            className="whitespace-nowrap inline-flex items-center text-md md:text-lg font-semibold hover:text-gray-400"
            href="/"
          >
            <Image
              className="w-20"
              width={1000}
              height={1000}
              src={`/eye-logo.png`}
              alt="Robotics Academy Logo"
            />
            Robotics Academy
          </Link>
          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover-bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover-text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-image-and-text-1"
              aria-controls="navbar-image-and-text-1"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-image-and-text-1"
          className="hs-collapse hidden transition-all duration-300 basis-full grow md:block"
        >
          <div className="flex flex-col gap-5 mt-5 md:flex-row md:items-center md:justify-end md:mt-0 md:pl-5">
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover-text-gray-500"
              href="/demoreel"
            >
              Demo Reel
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover-text-gray-500"
              href="/virtualclassroom"
            >
              Virtual Classroom
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover-text-gray-500"
              href="/forum"
            >
              Roboticist Forum
            </Link>
            <Link
              className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover-text-gray-500"
              href="/articles"
            >
              Articles
            </Link>
            <Dropdown label="About" inline>
              <DropdownHeader>
                <Link className="hover:text-gray-400" href="/about">
                  About Home
                </Link>
              </DropdownHeader>
              <DropdownHeader>
                <Link
                  className="ml-1.5 hover:text-gray-400"
                  href="/about/milestones"
                >
                  Milestones
                </Link>
              </DropdownHeader>
              <DropdownHeader>
                <Link className="ml-4 hover:text-gray-400" href="/about/summit">
                  Summit
                </Link>
              </DropdownHeader>
              <DropdownHeader>
                <Link
                  className="ml-2.5 hover:text-gray-400"
                  href="/about/our-team"
                >
                  Our Team
                </Link>
              </DropdownHeader>
              <DropdownHeader>
                <Link className="hover:text-gray-400" href="/about/news">
                  Latest News
                </Link>
              </DropdownHeader>
            </Dropdown>
            {session?.user ? (
              <UserAccountNav />
            ) : (
              <Link
                className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500"
                href="/sign-in"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
