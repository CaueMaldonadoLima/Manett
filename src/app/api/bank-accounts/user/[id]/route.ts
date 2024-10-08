import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { bankAccounts } from "../../schema";

// get all user categories
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id: userId } = params;

  const result = await db
    .select()
    .from(bankAccounts)
    .where(eq(bankAccounts.userId, userId));

  if (result.length === 0)
    return Response.json({
      status: 404,
      message: `No bank accounts found for user with id: ${userId}`,
    });

  return Response.json({
    status: 200,
    message: "User bank accounts retrieved successfully",
    data: result,
  });
}
