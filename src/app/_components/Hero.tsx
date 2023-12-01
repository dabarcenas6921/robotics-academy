import Image from "next/image";
import banner from "../../../public/banner.jpg";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:text-6xl">
            Robotics Academy FIU
          </h1>
          <p className="mt-3 text-lg text-black">
            Introducing a new way to learn about robotics.
          </p>
          <div className="mt-5 flex gap-x-4">
            <Link
              type="button"
              href="/forum"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-lime-500 shadow-sm hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-lg"
            >
              Access the Forum
            </Link>
            <Link
              type="button"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 border border-lime-500 rounded-md font-medium text-lime-500 bg-transparent hover:bg-lime-500 hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-lg"
              href="/about"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            className="w-full rounded-xl"
            src={banner}
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
}
