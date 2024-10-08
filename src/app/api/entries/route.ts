import { db } from "@/lib/db";
import { generateIdFromEntropySize } from "lucia";
import { entries } from "./schema";

export async function POST(request: Request) {
  const {
    title,
    description,
    value,
    type,
    date,
    userId,
    categoryId,
    bankAccountId,
  } = await request.json();

  // TODO: validate input

  const id = generateIdFromEntropySize(10); // 16 characters long
  const entry = {
    id: id,
    title: title,
    description: description,
    value: value,
    type: type,
    date: date,
    userId: userId,
    categoryId: categoryId,
    bankAccountId: bankAccountId,
  };
  const [result] = await db.insert(entries).values(entry).returning();

  if (!result)
    return Response.json({ status: 500, message: "Error creating entry" });

  return Response.json({
    status: 200,
    message: "Entry created",
    data: result,
  });
}
