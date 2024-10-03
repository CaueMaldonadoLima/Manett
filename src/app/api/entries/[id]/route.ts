import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { entries } from "../schema";

// get category by id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const result = await db.select().from(entries).where(eq(entries.id, id));

  if (!result)
    return Response.json({
      status: 404,
      message: `No entries found with id: ${id}`,
    });

  return Response.json({
    status: 200,
    message: "Entry retrieved successfully",
    data: result,
  });
}

// update category
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { ...updates } = await request.json();

  // TODO: Validate input

  const result = await db
    .update(entries)
    .set(updates)
    .where(eq(entries.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Entry not found" });

  return Response.json({
    status: 200,
    message: "Entry updated successfully",
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
    .delete(entries)
    .where(eq(entries.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Entry not found" });

  return Response.json({
    status: 200,
    message: "Entry deleted successfully",
    data: result,
  });
}
