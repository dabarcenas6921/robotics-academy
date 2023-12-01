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
          link="summit"
        />
      </div>
    </div>
  );
}
