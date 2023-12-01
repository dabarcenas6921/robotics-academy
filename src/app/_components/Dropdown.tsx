import React from "react";
import Image from "next/image";
import gear from "../../../public/green-gear.png";
import Link from "next/link";

const GearDropdown = () => {
  return (
    <div className="relative group">
      <Image
        src={gear}
        width={96}
        height={85}
        className="w-8 h-8 ml-2 rotate-0 transition-transform transform-gpu hover:rotate-180 cursor-pointer"
        alt="FIU Communication"
      />
      <div className="absolute right-0 mt-2 py-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
        <ul className="divide-y divide-gray-200">
          <li>
            <Link
              href="/sign-in"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/sign-up"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Sign in
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GearDropdown;
