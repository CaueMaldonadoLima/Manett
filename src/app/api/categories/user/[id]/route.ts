import { db } from "@/lib/db";
import { categories } from "../../schema";
import { eq } from "drizzle-orm";

// get all user categories
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id: userId } = params;

  const result = await db
    .select()
    .from(categories)
    .where(eq(categories.userId, userId));

  if (!result)
    return Response.json({
      status: 404,
      message: `No categories found for user with id: ${userId}`,
    });

  return Response.json({
    status: 200,
    message: "User categories retrieved successfully",
    data: result,
  });
}
