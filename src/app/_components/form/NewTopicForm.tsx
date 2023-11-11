import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function NewTopicForm() {
  const FormSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
    content: z.string().min(1, "Content is required"),
    category: z
      .string()
      .min(1, "Category is required")
      .refine((val) => val !== "Choose a category", {
        message: "Category is required",
      }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/forum", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: values.title,
        content: values.content,
        category: values.category,
      }),
    });

    if (response.ok) {
      console.log("Post created successfully!");
    } else {
      console.error("Post creation failed");
    }
  };

  return (
    <div
      id="hs-new-topic-modal"
      className="hs-overlay hidden w-full h-full fixed top-0 left-0 z-[60] flex items-center justify-center overflow-x-hidden overflow-y-auto"
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all 2xl:max-w-6xl sm:w-full m-3"
      >
        <div className="flex flex-col bg-white border shadow-sm rounded-xl">
          <div className="flex justify-between items-center py-3 px-4 border-b">
            <h3 className="font-bold text-gray-800 text-xl">New Forum Post</h3>
            <button
              type="button"
              className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm"
              data-hs-overlay="#hs-new-topic-modal"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3.5 h-3.5"
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <div className="mb-4">
              <label
                htmlFor="title"
                className="block text-gray-800 font-medium mb-1"
              >
                Post Title
              </label>
              <input
                {...register("title")}
                type="text"
                id="title"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                placeholder="Enter your post title here..."
              />
              {errors.title && (
                <p className="text-red-600">{errors.title.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="category"
                className="block mb-2 font-medium text-black"
              >
                Select a category
              </label>
              <select
                {...register("category")}
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option value="">Choose a category</option>
                <option value="Automation">Automation</option>
                <option value="Certificates">Certificates</option>
                <option value="Courses">Courses</option>
                <option value="Immersive Learning">Immersive Learning</option>
                <option value="Industrial Robotics">Industrial Robotics</option>
                <option value="Other">Other</option>
              </select>
              {errors.category && (
                <p className="text-red-600">{errors.category.message}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="block text-gray-800 font-medium mb-1"
              >
                Post Content
              </label>
              <textarea
                {...register("content")}
                id="content"
                rows={4}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
                placeholder="Enter your post content here..."
              ></textarea>
              {errors.content && (
                <p className="text-red-600">{errors.content.message}</p>
              )}
            </div>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
            <button
              type="button"
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm"
              data-hs-overlay="#hs-new-topic-modal"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium text-white bg-blue-600 shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm"
            >
              Submit Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
