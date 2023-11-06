import CardProps from "@/interfaces/CardProps.interface";
import Image from "next/image";

export default function Card({ image, title, description, link }: CardProps) {
  return (
    <a
      className="group flex flex-col justify-between h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
      href={link}
    >
      <div className="aspect-w-15 aspect-h-11">
        <Image
          className="w-full h-[235px] object-cover rounded-xl"
          width={1000}
          height={1000}
          src={`/about/news/${image}`}
          alt={title}
        />
      </div>
      <div className="my-6">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="mt-5 text-gray-600">{description}</p>
      </div>
      <h5 className="text-sm text-black font-semibold underline text-center">Read More</h5>
    </a>
  );
}
