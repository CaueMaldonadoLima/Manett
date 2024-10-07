import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { entries } from "../../schema";

// get all user entries
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id: userId } = params;

  const result = await db
    .select()
    .from(entries)
    .where(eq(entries.userId, userId));

  if (!result)
    return Response.json({
      status: 404,
      message: `No entries found for user with id: ${userId}`,
    });

  return Response.json({
    status: 200,
    message: "User entries retrieved successfully",
    data: result,
  });
}
