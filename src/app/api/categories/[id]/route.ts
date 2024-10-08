import { db } from "@/lib/db";
import { eq } from "drizzle-orm";
import { categories } from "../schema";

// get category by id
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const [result] = await db
    .select()
    .from(categories)
    .where(eq(categories.id, id));

  if (!result)
    return Response.json({
      status: 404,
      message: `No categories found with id: ${id}`,
    });

  return Response.json({
    status: 200,
    message: "Category retrieved successfully",
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

  const [result] = await db
    .update(categories)
    .set(updates)
    .where(eq(categories.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Category not found" });

  return Response.json({
    status: 200,
    message: "Category updated successfully",
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
    .delete(categories)
    .where(eq(categories.id, id))
    .returning();

  if (!result)
    return Response.json({ status: 404, message: "Category not found" });

  return Response.json({
    status: 200,
    message: "Category deleted successfully",
    data: result,
  });
}
