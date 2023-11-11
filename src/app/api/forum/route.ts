import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/lib/db";

// Schema for forum post input validation
const forumPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(100, "Title is too long"),
  content: z.string().min(1, "Content is required"),
  category: z
    .string()
    .min(1, "Category is required")
    .refine((val) => val !== "Choose a category", {
      message: "Valid category is required",
    }),
});

//Matching the enum in the prisma schema
enum CategoryType {
  Automation = "Automation",
  Certificates = "Certificates",
  Courses = "Courses",
  ImmersiveLearning = "ImmersiveLearning",
  IndustrialRobotics = "IndustrialRobotics",
  Other = "Other",
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to post." },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsedData = forumPostSchema.parse(body);

    // Validate and convert the category
    const category = parsedData.category as CategoryType;
    if (!Object.values(CategoryType).includes(category)) {
      return NextResponse.json(
        { message: "Invalid category type" },
        { status: 400 }
      );
    }

    // Create a new post in the database using Prisma
    const post = await db.post.create({
      data: {
        title: parsedData.title,
        content: parsedData.content,
        category,
        userId: session.user.id,
      },
    });

    return NextResponse.json({ message: "Post created successfully", post });
  } catch (error) {
    const statusCode = error instanceof z.ZodError ? 400 : 500;
    return NextResponse.json(
      { message: "Something went wrong!", error: error },
      { status: statusCode }
    );
  }
}

export async function GET(req: Request) {
  return NextResponse.json({ message: "GET request" });
}
