import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const recoverPostSchema = z.object({ postId: z.string() });

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user) {
      return NextResponse.json(
        { message: "You must be logged in to post." },
        { status: 401 }
      );
    }

    if (session.user.role !== "Admin") {
      return NextResponse.json(
        { message: "You must be an admin to delete posts" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsedData = recoverPostSchema.parse(body);

    const deletedPost = await db.post.delete({
      where: { id: parsedData.postId },
    });

    return NextResponse.json({
      message: "Post recovered successfully",
      deletedPost,
    });
  } catch (error) {
    const statusCode = error instanceof z.ZodError ? 400 : 500;
    return NextResponse.json(
      { message: "Something went wrong!", error: error },
      { status: statusCode }
    );
  }
}
