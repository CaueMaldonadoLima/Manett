import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { bankAccounts } from "../schema";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const [result] = await db
    .select()
    .from(bankAccounts)
    .where(eq(bankAccounts.id, id));

  if (!result)
    return Response.json({
      status: 404,
      message: `No bank accounts found with id: ${id}`,
    });

  return Response.json({
    status: 200,
    message: "Bank account retrieved successfully",
    data: result,
  });
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { ...updates } = await request.json();

  // TODO: Validate input

  const [result] = await db
    .update(bankAccounts)
    .set(updates)
    .where(eq(bankAccounts.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Bank account not found" });

  return Response.json({
    status: 200,
    message: "Bank account updated successfully",
    data: result,
  });
}

// delete category
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  const [result] = await db
    .delete(bankAccounts)
    .where(eq(bankAccounts.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Bank account not found" });

  return Response.json({
    status: 200,
    message: "Bank account deleted successfully",
    data: result,
  });
}
