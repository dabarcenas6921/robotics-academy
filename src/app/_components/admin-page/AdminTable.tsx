import {
  AdminTableProps,
  TableRowsProps,
} from "@/interfaces/AdminTableProps.interface";
import AdminTableDropdown from "./AdminTableDropdown";

export default function AdminTable({ spamPosts }: AdminTableProps) {
  return (
    <div className="flex flex-col">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg divide-y divide-gray-200">
            <div className="py-3 px-4">
              <div className="relative max-w-xs">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                  placeholder="Search for items"
                />
                <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                  <svg
                    className="h-4 w-4 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="py-3 px-4 pe-0">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
                        />
                        <label className="sr-only">Checkbox</label>
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Date Posted
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Content
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      User
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {spamPosts.map((post, index) => (
                    <TableRows key={index} post={post} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TableRows({ post }: TableRowsProps) {
  function categoryColor(category: string) {
    switch (category) {
      case "Automation":
        return "bg-green-500";
      case "Certificates":
        return "bg-blue-500";
      case "Courses":
        return "bg-yellow-500";
      case "ImmersiveLearning":
        return "bg-purple-500";
      case "IndustrialRobotics":
        return "bg-red-500";
      case "Other":
        return "bg-teal-500";
      default:
        return "bg-gray-500"; // A default case if the category doesn't match
    }
  }

  function formatCategoryName(category: string) {
    if (category === "ImmersiveLearning") {
      return "Immersive Learning";
    } else if (category === "IndustrialRobotics") {
      return "Industrial Robotics";
    } else {
      return category;
    }
  }

  return (
    <tr>
      <td className="py-3 ps-4">
        <div className="flex items-center h-5">
          <input
            id="hs-table-search-checkbox-1"
            type="checkbox"
            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="hs-table-search-checkbox-1" className="sr-only">
            Checkbox
          </label>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
        {post.createdAt.toDateString()}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm  text-gray-800">
        {post.title}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {post.content}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        <span
          className={`inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${categoryColor(
            post.category
          )} text-white`}
        >
          {formatCategoryName(post.category)}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
        {post.user.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <AdminTableDropdown />
      </td>
    </tr>
  );
}
