import robot_design from "../../../public/robot-design.jpg";
import starship_pic from "../../../public/starship.webp";
import robotic_arms from "../../../public/automated_robotic_arms.jpg";

import Image from "next/image";

export default function BlogSection() {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-8">
        <h2 className="text-2xl font-bold text-black md:text-4xl md:leading-tight">
          Blog Articles
        </h2>
        <p className="mt-1 text-gray-800">
          See the latest robotics articles and news.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full h-[235px] object-cover rounded-xl"
              src={robotic_arms}
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-black">
              The Rise of AI-Integrated Robotics in Modern Manufacturing
            </h3>
            <p className="mt-5 text-gray-600">
              Explore how artificial intelligence is revolutionizing the
              robotics landscape in todays factories and assembly lines.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 className="text-sm text-black">By Lauren Waller</h5>
            </div>
          </div>
        </a>

        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-ful max-h-[235px] object-cover rounded-xl"
              src={robot_design}
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-black">
              From Fiction to Function: The Evolution of Robot Designs
            </h3>
            <p className="mt-5 text-gray-600">
              Delve into the fascinating journey of robots, from their portrayal
              in early science fiction to their diverse real-world applications
              today.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 className="text-sm text-black">By Aaron Larsson</h5>
            </div>
          </div>
        </a>

        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5"
          href="#"
        >
          <div className="aspect-w-16 aspect-h-11">
            <Image
              className="w-full max-h-[235px] object-cover rounded-xl"
              src={starship_pic}
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-black">
              The Ethical Implications of Fully Autonomous Robots
            </h3>
            <p className="mt-5 text-gray-600">
              Analyze the moral and societal challenges posed by the emergence
              of robots that can operate without human intervention.
            </p>
          </div>
          <div className="mt-auto flex items-center gap-x-3">
            <img
              className="w-8 h-8 rounded-full"
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
              alt="Image Description"
            />
            <div>
              <h5 className="text-sm text-black">By Lauren Waller</h5>
            </div>
          </div>
        </a>
      </div>

      <div className="mt-12 text-center">
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-gold shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-md"
        >
          Read More
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
        </button>
      </div>
    </div>
  );
}
