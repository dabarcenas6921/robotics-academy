import robot_design from "../../../public/robot-design.jpg";
import starship_pic from "../../../public/starship.webp";
import robotic_arms from "../../../public/automated_robotic_arms.jpg";

import Image from "next/image";
import Link from "next/link";
import Card from "./Card";

export default function BlogSection() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-8">
        <h2 className="text-2xl font-bold text-black md:text-4xl md:leading-tight">
          News Articles
        </h2>
        <p className="mt-1 text-gray-800">
          See the latest robotics articles and news.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card
          title="Robotics Academy Among Top Finalists for Prestigious Innovation Award"
          description="The academy has been named one of 40 finalists nationwide for a prestigious Igniting Innovation Award from the American Council for Technology and Industry Advisory Council (ACT-IAC)."
          image="robotics-lab.jpg"
          link="https://news.fiu.edu/2020/fius-robotics-academy-among-top-finalists-for-prestigious-innovation-award"
        />
        <Card
          title="Professors Receive NSF Grant to Develop App to Mitigate Impact of COVID-19"
          description={`Through a National Science Foundation RAPID award of approximately $160,000, titled A Platform for Mitigating the Impacts of COVID-19 on the Healthcare System, the researchers will create a platform using artificial intelligence and augmented reality as a digital \"hub" for PPE \training.`}
          image="covid-project-graphics_final.jpg"
          link="https://news.fiu.edu/2020/professors-receive-nsf-grant-to-develop-app-for-mitigating-the-impacts-of-covid-19"
        />
        <Card
          title="Robotics Academy Summit"
          description="The Robotics Academy Summit was organized to launch the Project's research phase. The one-day summit featured four keynote speakers - industry-leading business owners who are noted analysts of automation and AI technologies across the global economy."
          image="matt2.png"
          link="about/summit"
        />
      </div>
      <div className="mt-12 text-center">
        <Link
          type="button"
          href="/about/news"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-lime-500 shadow-sm hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all text-md"
        >
          Read More News
          <svg
            className="w-2.5 h-auto ml-2"
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 7C0.447715 7 -3.73832e-07 7.44771 -3.49691e-07 8C-3.2555e-07 8.55228 0.447715 9 1 9L13.0858 9L7.79289 14.2929C7.40237 14.6834 7.40237 15.3166 7.79289 15.7071C8.18342 16.0976 8.81658 16.0976 9.20711 15.7071L16.0303 8.88388C16.5185 8.39573 16.5185 7.60427 16.0303 7.11612L9.20711 0.292893C8.81658 -0.0976318 8.18342 -0.0976318 7.79289 0.292893C7.40237 0.683417 7.40237 1.31658 7.79289 1.70711L13.0858 7L1 7Z"
              fill="currentColor"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
