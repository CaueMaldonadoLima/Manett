import { db } from "@/lib/db";
import { users } from "../schema";
import { eq } from "drizzle-orm";

// get user
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const [user] = await db.select().from(users).where(eq(users.id, id));

  if (!user) return Response.json({ status: 404, message: "User not found" });

  return Response.json({
    status: 200,
    message: "User data retrieved successfully",
    data: user,
  });
}

// update user
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { email, ...updates } = await request.json();

  // TODO: Validate input

  const [result] = await db
    .update(users)
    .set(updates)
    .where(eq(users.id, id))
    .returning();

  if (!result) return Response.json({ status: 404, message: "User not found" });

  return Response.json({
    status: 200,
    message: "User updated successfully",
    data: result,
  });
}

// make sure to confirm this multiple times in the frontend
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;

  // account rows are deleted via cascade
  const [result] = await db.delete(users).where(eq(users.id, id)).returning();

  if (!result) return Response.json({ status: 404, message: "User not found" });

  return Response.json({
    status: 200,
    message: "User deleted successfully",
    data: result,
  });
}
