import Image from "next/image";
import openBox from "../../../public/about/open-box.png";
import teamDescription from "../../../public/about/team_description.png";
import envelope from "../../../public/about/envelope-img.png";

export default function Page() {
  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 mt-10 text-black">
      <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
        <div className="lg:col-span-3">
          <h1 className="flex justify-center md:block text-2xl text-black md:text-4xl">
            Our Program
          </h1>
          <p className="mt-3 text-sm text-black">
            The Robotics Academy is an AI-powered set of resources developed to
            support the building industry workers, professionals, business
            owners, entrepreneurs, educators and policy makers. With a focus on
            training for robotics and automation technologies, the Robotics
            Academy uses Artiﬁcial Intelligence (AI), Immersive technologies
            (Virtual and Mixed Reality), and big data analytics to create a
            personalized experience for users to learn, discover and connect.
            The Robotics Academy has three main branches:{" "}
            <b>
              Immersive Learning, Innovation Network, and Automation Marketplace
            </b>
            .
          </p>
          <div className="mt-5 flex gap-x-4 justify-center md:justify-end">
            <button
              type="button"
              className="py-3 px-4 md:mr-10 inline-flex justify-center items-center gap-2 border border-gold rounded-md font-medium text-gold bg-transparent hover:bg-gold hover:text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-lg"
            >
              Read More
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 mb-10 mt-10 md:mb-0 md:mt-0">
          <Image
            className="w-full rounded-xl"
            src={openBox}
            alt="Open Box Image"
          />
        </div>
      </div>
      <div>
        <h1 className="flex justify-center md:block text-2xl text-black md:text-4xl">
          Our Team
        </h1>
        <p className="mt-3 text-sm text-black">
          Our team has the training and experience to deliver the project. We
          are proud to say that:
        </p>
        <div className="lg:col-span-4 mt-5 lg:mt-0">
          <Image
            className="w-full rounded-xl"
            src={teamDescription}
            alt="Team Description Image"
          />
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="grid md:grid-cols-2 mx-auto">
          <div>
            <h1 className="flex justify-center md:block text-2xl text-black md:text-4xl">
              Stay Informed
            </h1>
            <p className="mt-3 text-sm flex justify-center md:justify-start text-black mb-5">
              Subscribe to our newsletter
            </p>
          </div>
          <form
            action="https://fiu.us1.list-manage.com/subscribe/post?u=e436098cc9172d90a4241b115&amp;id=ecd80a3e2d"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="relative w-full">
                <label
                  htmlFor="email"
                  className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email address
                </label>
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="block p-3 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:rounded-none sm:rounded-l-lg focus:ring-2 focus:border-primary-500"
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  required={true}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-lime-500 border-lime-600 sm:rounded-none sm:rounded-r-lg hover:bg-lime-600 focus:ring-2 focus:ring-lime-300"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
