import { db } from "@/lib/db";
import { generateIdFromEntropySize } from "lucia";
import { bankAccounts } from "./schema";

export async function POST(request: Request) {
  const { title, description, iconName, balance, userId } =
    await request.json();

  // TODO: validate input

  const id = generateIdFromEntropySize(10); // 16 characters long
  const bankAccount = {
    id: id,
    title: title,
    description: description,
    iconName: iconName,
    balance: balance,
    userId: userId,
  };
  const [result] = await db
    .insert(bankAccounts)
    .values(bankAccount)
    .returning();

  if (!result)
    return Response.json({
      status: 500,
      message: "Error creating bank account",
    });

  return Response.json({
    status: 200,
    message: "Bank account created",
    data: result,
  });
}
