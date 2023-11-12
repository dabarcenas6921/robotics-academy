"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

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
  } = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      content: "",
      category: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
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
        toast.success("Post created successfully!");
        router.refresh();
        router.push("/forum");
      } else {
        throw new Error("Post creation failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while attempting to post!");
    }
  };

  return (
    <main className=" p-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Start a New Topic
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
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
              className="block text-gray-800 font-medium mb-1"
            >
              Category
            </label>
            <select
              {...register("category")}
              id="category"
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-900 focus:outline-none"
            >
              <option value="">Choose a category</option>
              <option value="Automation">Automation</option>
              <option value="Certificates">Certificates</option>
              <option value="Courses">Courses</option>
              <option value="ImmersiveLearning">Immersive Learning</option>
              <option value="IndustrialRobotics">Industrial Robotics</option>
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
              Content
            </label>
            <textarea
              {...register("content")}
              id="content"
              rows={4}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none"
              placeholder="Enter your post content here..."
            ></textarea>
            {errors.content && (
              <p className="text-red-600">{errors.content.message}</p>
            )}
          </div>
          <div className="flex justify-end items-center gap-x-2 mt-4">
            <button
              type="button"
              onClick={() => router.push("/forum")}
              className="py-2 sm:py-3 px-3 sm:px-4 w-full sm:w-auto inline-flex justify-center items-center rounded-md border font-medium bg-white text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition-all text-sm sm:text-md flex-shrink-0"
            >
              Back
            </button>
            <button
              type="submit"
              className="py-2 sm:py-3 px-3 sm:px-4 w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-md font-medium text-white bg-gold shadow-sm hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold transition-all text-sm sm:text-md flex-shrink-0"
            >
              Submit Post
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
