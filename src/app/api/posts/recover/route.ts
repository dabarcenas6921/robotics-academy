import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { AkismetClient } from "akismet-api";

const recoverPostSchema = z.object({ postId: z.string() });
const client = new AkismetClient({
  key: process.env.AKISMET_API_KEY!,
  blog: process.env.AKISMET_BLOG_URL!,
});

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
        { message: "You must be an admin to recover posts" },
        { status: 401 }
      );
    }

    const body = await req.json();
    const parsedData = recoverPostSchema.parse(body);

    const recoveredPost = await db.post.update({
      where: { id: parsedData.postId },
      data: { isSpam: false },
    });

    //Pass this information to Akismet API
    const ip = (req.headers.get("x-forwarded-for") ?? "127.0.0.1").split(
      ","
    )[0];

    const comment = {
      user_ip: ip,
      user_agent: req.headers.get("User-Agent")!,
      comment_type: "forum-post",
      comment_author: session.user.name!,
      comment_author_email: session.user.email,
      comment_content: recoveredPost.content,
      user_role: session.user.role == "Admin" ? "administrator" : "user",
    };

    await client.submitHam(comment);

    return NextResponse.json({
      message:
        "Post recovered successfully! Submitted post to Aksimet for review.",
      recoveredPost,
    });
  } catch (error) {
    const statusCode = error instanceof z.ZodError ? 400 : 500;
    return NextResponse.json(
      { message: "Something went wrong!", error: error },
      { status: statusCode }
    );
  }
}
