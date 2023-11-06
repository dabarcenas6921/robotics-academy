import Card from "@/app/_components/Card";
import Image from "next/image";

export default function page() {
  return (
    <div className="mx-auto mb-12 mt-6">
      <div className="container pb-20 px-5 mx-auto">
        <div className="relative flex justify-center mx-auto w-11/12 pb-5">
          <Image
            className="rounded-2xl opacity-20"
            src={`/about/news/news-header.png`}
            alt="News Header Image"
            width={400}
            height={400}
          />
          <div className="text-black font-semibold text-center absolute mt-5 sm:mt-20">
            <h1 className="flex justify-center md:block text-2xl md:text-4xl">
              News
            </h1>
            <p className="mt-3 text-sm">
              Here you can find the Robotics Academy&rsquo;s latest news.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <iframe
            width={900}
            height={600}
            src="https://www.youtube.com/embed/iaRR14VNbnc"
            title="Robotics Academy Project Brief"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mt-10">
          <h1 className="mb-5 flex justify-center md:block text-2xl text-black md:text-4xl">
            Latest News
          </h1>
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
            <Card
              title="Robotics Academy Featured on NBC 6"
              description="On October 4th, NBC 6 visited the Robotics and Fabrication Lab at FIU. Hear from our faculty and students as they talk about the opportunities offered by the National Science Foundation (NSF) grant."
              image="usonnbc.png"
              link="https://app.criticalmention.com/app/#clip/view/496479bb-c100-420c-9451-8815e43eafeb?token=dfc73d69-aba7-4674-9571-e06e9d5928ac"
            />
            <Card
              title="National Science Foundation Awards $1M Grant"
              description="The National Science Foundation's (NSF) Convergence Accelerator program has awarded a $1 million grant to a team of FIU researchers."
              image="cover-page.png"
              link="https://news.fiu.edu/2019/fiu-to-help-infuse-artificial-intelligence-into-the-building-design-and-construction-industries-with-1-million-nsf-grant"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
