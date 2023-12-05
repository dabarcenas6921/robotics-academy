"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function SignInForm() {
  const router = useRouter();

  const FormSchema = z.object({
    email: z.string().min(1, "Email is required").email("Invalid email"),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Password must have at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    const signInData = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });

    if (signInData?.error) {
      toast.error("An error occurred when signing in. Please try again!");
    } else {
      router.refresh();
      toast.success("Signed in successfully!");
      router.push("/admin");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 sm:px-8 py-10 mx-auto md:h-screen lg:py-0">
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="p-6 sm:p-10 space-y-6 sm:space-y-8 md:space-y-10">
          <h1 className="text-2xl sm:text-3xl font-bold leading-tight tracking-tight text-gray-900 md:text-4xl">
            Sign in to your account
          </h1>
          <form
            className="space-y-6 sm:space-y-8 md:space-y-10"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4"
                placeholder="mail@example.com"
              />
              {errors.email && (
                <p className="mt-2 text-red-600 text-sm sm:text-lg">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="password"
                className="block mb-2 text-sm sm:text-lg font-medium text-gray-900"
              >
                Password
              </label>
              <input
                type="password"
                {...register("password")}
                id="password"
                placeholder="••••••••"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm sm:text-lg rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-3 sm:p-4"
              />
              {errors.password && (
                <p className="mt-2 text-red-600 text-sm sm:text-lg">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-lime-500 shadow-sm hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 font-medium rounded-lg text-sm sm:text-lg px-5 py-3 sm:px-6 sm:py-4 text-center"
            >
              Sign in
            </button>
            <p className="text-sm sm:text-lg font-light text-gray-500">
              Don’t have an account yet?
              <Link
                href="/sign-up"
                className="px-2 font-medium text-primary-600 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
