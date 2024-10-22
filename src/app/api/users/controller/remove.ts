import { z } from "zod";
import useCase from "../useCase";
import { lucia } from "@/lib/auth";

const schema = z.string().trim().min(1);

export async function remove(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  // TODO: Create specific error
  if (!sessionId) throw new Error("Unauthorized");

  const { session, user } = await lucia.validateSession(sessionId);

  const { data, error } = schema.safeParse(input);

  // TODO: Create specific error
  if (error) throw error;
  // TODO: Create specific error + reusable function
  // User can only delete their own account
  if (user?.id !== data) throw new Error("Unauthorized");

  const result = await useCase.remove(data);
  return result;
}
