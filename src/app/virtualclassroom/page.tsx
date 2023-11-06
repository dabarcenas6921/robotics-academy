import VirtualClass from "../_components/VirtualClassroom";
export default function Page() {
  return (
    <div>
      <VirtualClass />
      <div className="flex flex-wrap"></div>
      <div className="hidden md:block w-full md:w-1/4 bg-gray-50 border-gray-700"></div>
    </div>
  );
}
