import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="block font-bold text-black text-3xl">
            Robotics Academy Summit
          </h1>
          <p className="mt-5 text-black">
            The Summit, which took place on November 8, 2019, featured
            discussions with and among five keynote speakers — industry leaders
            and noted analysts of the state of the future of automation and AI
            across the global economy. The Summit was attended by sixty
            representatives of the region's leading Architecture, Engineering
            and Construction firms, including two of the Nation's largest
            housing developers and builders.
            <br />
            <br />
            The Summit featured presentations from each of the keynote speakers,
            and extended focus group roundtable involving the invited business
            representatives, the Summit keynote speakers and the project tream.
          </p>
        </div>
        <div className="lg:col-span-4 mt-10 lg:mt-0">
          <Image
            width={1000}
            height={1000}
            className="w-full rounded-xl"
            src="/about/summit/summit-intro.png"
            alt="Summit Introduction Image"
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-8 gap-y-8 gap-x-8 mt-10">
        <div className="h-full p-5 border rounded-lg lg:col-span-2 bg-lime-300">
          <h1 className="block font-bold text-center text-4xl">1</h1>
          <p className="mt-5 text-lg text-center">
            Examined the state of the field, industry, and automation
            application across the global economy
          </p>
        </div>
        <div className="h-full p-5 border rounded-lg lg:col-span-2 bg-lime-300">
          <h1 className="block font-bold text-center text-4xl">2</h1>
          <p className="mt-5 text-lg text-center">
            Included presentations and discussions of new automation and AI
            opportunities and challenges in the AEC cluster
          </p>
        </div>
        <div className="h-full p-5 border rounded-lg lg:col-span-2 bg-lime-300">
          <h1 className="block font-bold text-center text-4xl">3</h1>
          <p className="mt-5 text-lg text-center">
            Communicated the shared experience of the keynote speakers in their
            path to adoption and application of AI technologies
          </p>
        </div>
        <div className="h-full p-5 border rounded-lg lg:col-span-2 bg-lime-300">
          <h1 className="block font-bold text-center text-4xl">4</h1>
          <p className="mt-5 text-lg text-center">
            Facilitated an in-depth exchange of experiences between the industry
            partner invitees
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-8 mt-10">
        <a
          className="relative"
          href="https://www.linkedin.com/in/andrewtsayjacobs/"
          target="_blank"
        >
          <Image
            src={`/about/summit/tsay-jacobs.png`}
            alt="Andrew Tsay Jacobs"
            width={1000}
            height={1000}
          />
          <div className="text-black text-center opacity-0 hover:opacity-70 hover:bg-lime-300 hover:rounded-3xl duration-300 whitespace-nowrap absolute inset-0 flex justify-center items-center"></div>
        </a>
        <a
          className="relative"
          href="https://www.branch.technology/matt-trimble"
          target="_blank"
        >
          <Image
            src={`/about/summit/trimble.png`}
            alt="Matthew Trimble"
            width={1000}
            height={1000}
          />
          <div className="text-black text-center opacity-0 hover:opacity-70 hover:bg-lime-300 hover:rounded-3xl duration-300 whitespace-nowrap absolute inset-0 flex justify-center items-center"></div>
        </a>
        <a
          className="relative"
          href="https://www.architecture.yale.edu/faculty/339-phillip-bernstein"
          target="_blank"
        >
          <Image
            src={`/about/summit/bernstein.png`}
            alt="Dr. Phil Bernstein"
            width={1000}
            height={1000}
          />
          <div className="text-black text-center opacity-0 hover:opacity-70 hover:bg-lime-300 hover:rounded-3xl duration-300 whitespace-nowrap absolute inset-0 flex justify-center items-center"></div>
        </a>
        <a
          className="relative"
          href="https://caup.tongji.edu.cn/caupen/c1/a3/c11079a115107/page.htm"
          target="_blank"
        >
          <Image
            src={`/about/summit/yuan.png`}
            alt="Philip Yuan"
            width={1000}
            height={1000}
          />
          <div className="text-black text-center opacity-0 hover:opacity-70 hover:bg-lime-300 hover:rounded-3xl duration-300 whitespace-nowrap absolute inset-0 flex justify-center items-center"></div>
        </a>
      </div>
      <div className="mt-10">
        <h1 className="flex justify-center text-2xl text-black md:text-4xl">
          Summit Report
        </h1>
        <p className=" text-center mt-3 text-sm text-black">
          Access the full Summit Report, documented with all the results from
          the discussion panel.
        </p>
        <div className="w-full flex justify-center">
          <div className="w-4/12 mt-3">
            <Link href="../resources/Summit-Report-OPT.pdf" target="_blank">
              <Image
                width={1000}
                height={1000}
                className="w-full rounded-xl"
                src="/about/summit/summit-report.png"
                alt="Summit Report Image"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
