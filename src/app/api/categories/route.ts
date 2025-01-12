import { db } from "@/lib/db";
import { generateIdFromEntropySize } from "lucia";
import { categories } from "./schema";

export async function POST(request: Request) {
  const { title, description, iconName, userId, parentCategoryId } =
    await request.json();

  // TODO: validate input

  const id = generateIdFromEntropySize(10); // 16 characters long
  const category = {
    id: id,
    title: title,
    description: description,
    iconName: iconName,
    userId: userId,
    parentCategoryId: parentCategoryId,
  };
  const [result] = await db.insert(categories).values(category).returning();

  if (!result)
    return Response.json({ status: 500, message: "Error creating category" });

  return Response.json({
    status: 200,
    message: "Category created",
    data: result,
  });
}
