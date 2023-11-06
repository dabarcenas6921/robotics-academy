"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import toast from "react-hot-toast";

export default function SignUpForm() {
  const FormSchema = z
    .object({
      email: z.string().min(1, "Email is required").email("Invalid email"),
      password: z
        .string()
        .min(1, "Password is required")
        .min(8, "Password must have at least 8 characters"),
      name: z.string().min(1, "Name is required").max(30),
      confirmPassword: z.string().min(1, "Password confirmation is required"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      path: ["confirmPassword"],
      message: "Passwords do not match",
    });

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const response = await fetch("/api/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        password: values.password,
      }),
    });

    if (response.ok) {
      toast.success("Account created successfully!");
      router.push("/sign-in");
    } else {
      console.error("Registration failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-8 mx-auto md:h-screen lg:justify-center lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md lg:max-w-lg xl:max-w-2xl 2xl:max-w-4xl">
        <div className="p-6 space-y-6 sm:p-8 md:p-10 lg:space-y-8">
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
            Sign up for a new account
          </h1>
          <form
            className="space-y-4 md:space-y-6"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg md:text-xl">
                Your Name
              </label>
              <input
                type="name"
                {...register("name")}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4 md:p-5"
                placeholder="Enter your name here"
              />
              {errors.name && (
                <p className="mt-2 text-red-600 text-sm sm:text-base md:text-lg">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg md:text-xl"
              >
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4 md:p-5"
                placeholder="mail@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-red-600 text-sm sm:text-base md:text-lg">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg md:text-xl"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4 md:p-5"
              />
              {errors.password && (
                <p className="mt-2 text-red-600 text-sm sm:text-base md:text-lg">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-gray-900 sm:text-lg md:text-xl"
              >
                Confirm Password
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                placeholder="Re-enter your password"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-base md:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4 md:p-5"
              />
              {errors.confirmPassword && (
                <p className="mt-2 text-red-600 text-sm sm:text-base md:text-lg">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full text-white bg-gold hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-lg text-sm sm:text-lg md:text-xl px-5 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 text-center"
            >
              Sign Up
            </button>
            <p className="text-sm font-light text-gray-500 sm:text-base md:text-lg">
              Already have an account?
              <Link
                href="/sign-in"
                className="px-2 font-medium text-primary-600 hover:underline"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
