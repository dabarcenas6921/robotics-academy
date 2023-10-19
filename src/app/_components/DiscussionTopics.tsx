import TabProps from "@/interfaces/TabProps.inteface";

export default function DiscussionTopics() {
  return (
    <div className="flex flex-col rounded-xl bg-gray-50 border-gray-700 shadow-slate-700/[.7] max-w-md mx-auto">
      <h2 className="font-bold">Discussion Topics</h2>
      <div className="max-w-xs flex flex-col rounded-md shadow-sm">
        <button
          type="button"
          className="py-3 px-4 inline-flex justify-between items-center gap-2 rounded-t-md border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
        >
          All Discussions
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="16"
            width="16"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 98.192 98.192"
          >
            <g>
              <path d="M95.799,87.061c-1.96-1.857-3.291-4.046-3.963-6.514c1.101-2.402,1.658-4.952,1.658-7.593V57.771   c0-6.521-3.432-12.239-8.572-15.493v-9.857c0-14.083-11.457-25.54-25.54-25.54H31.524c-14.083,0-25.539,11.457-25.539,25.54v21.849   c0,3.778,0.819,7.423,2.436,10.846c-0.979,3.837-3.005,7.229-6.028,10.092L0,77.475l3.114,1.076c2.032,0.703,4.191,1.06,6.417,1.06   c3.412,0,6.997-0.823,10.667-2.448c3.505,1.734,7.4,2.646,11.327,2.646h7.265c2.722,6.729,9.297,11.502,16.993,11.502h19.355   c2.727,0,5.432-0.612,7.884-1.777c2.54,1.089,5.025,1.641,7.402,1.641c1.613,0,3.18-0.259,4.654-0.769l3.114-1.077L95.799,87.061z    M21.209,73.179l-0.897-0.49l-0.923,0.44c-4.185,1.996-8.173,2.8-11.817,2.362c2.433-3.004,4.081-6.416,4.913-10.181l0.154-0.698   l-0.323-0.638c-1.546-3.05-2.331-6.314-2.331-9.706V32.421c0-11.877,9.663-21.54,21.539-21.54h27.858   c11.877,0,21.54,9.663,21.54,21.54v21.848c0,11.876-9.663,21.538-21.54,21.538H31.524C27.924,75.806,24.357,74.898,21.209,73.179z    M90.423,87.172c-2.06,0-4.277-0.561-6.592-1.664l-0.923-0.44l-0.897,0.49c-2.098,1.146-4.475,1.751-6.874,1.751H55.782   c-5.433,0-10.159-3.039-12.594-7.502h16.194c14.083,0,25.54-11.456,25.54-25.538V47.29c2.809,2.62,4.572,6.345,4.572,10.48v15.183   c0,2.258-0.523,4.433-1.555,6.466l-0.324,0.638l0.154,0.699c0.516,2.335,1.468,4.481,2.841,6.413   C90.548,87.17,90.486,87.172,90.423,87.172z" />
            </g>
          </svg>
        </button>
        <Tab label="Automation" color="bg-green-500" count={100} />
        <Tab label="Certificates" color="bg-blue-500" count={50} />
        <Tab label="Courses" color="bg-yellow-500" count={75} />
        <Tab label="Immersive Learning" color="bg-purple-500" count={120} />
        <Tab label="Industrial Robotics" color="bg-red-500" count={30} />
        <Tab label="Other" color="bg-teal-500" count={20} />
      </div>
    </div>
  );
}
function Tab({ label, color, count }: TabProps) {
  return (
    <button
      type="button"
      className="-mt-px py-3 px-4 inline-flex justify-between items-center gap-2 border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
    >
      {label}
      <span
        className={`inline-flex items-center py-1 px-2 rounded-full text-xs font-medium ${color} text-white`}
      >
        {count}
      </span>
    </button>
  );
}
