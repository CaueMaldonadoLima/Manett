import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { entries } from "../schema";

// get entry by id
export async function GET(_: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;

  const [result] = await db.select().from(entries).where(eq(entries.id, id));

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

// update entry
export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const { ...updates } = await request.json();

  // TODO: Validate input

  const [result] = await db
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

// delete entry
export async function DELETE(_: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
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
