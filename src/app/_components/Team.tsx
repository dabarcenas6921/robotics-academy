import TeamProps from "@/interfaces/TeamProps.interface";
import Image from "next/image";

export default function Team({ src, name, position, link }: TeamProps) {
  return (
    <div className="flex mb-4 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
      <a
        className="relative mx-auto w-11/12"
        href={`${link ? link : '#0'}`}
        target={`${link ? "_blank" : "_self"}`}
      >
        <Image
          className="rounded-2xl"
          src={`/about/members/${src}`}
          alt={name}
          width={1000}
          height={1000}
        />
        <div className="text-black text-center opacity-0 hover:opacity-70 hover:bg-gray-100 hover:rounded-2xl duration-300 whitespace-nowrap absolute inset-0 flex justify-center items-center">
          <p className="mb-5 text-sm">
            <b>{name}</b> <br />
            {position}
          </p>
        </div>
      </a>
    </div>
  );
}
