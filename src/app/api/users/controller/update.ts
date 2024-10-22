import { z } from "zod";
import useCase from "../useCase";
import { lucia } from "@/lib/auth";

const schema = z.object({
  id: z.string().trim().min(1),
  user: z.any(), // TODO: Fix type
});

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  // TODO: Create specific error
  if (!sessionId) throw new Error("Unauthorized");

  // TODO: Validate session
  const { session, user } = await lucia.validateSession(sessionId);

  const { data, error } = schema.safeParse(input);

  // TODO: Create specific error
  if (error) throw error;
  // TODO: Create specific error + reusable function
  // User can only update their own data
  if (user?.id !== data.id) throw new Error("Unauthorized");

  const result = await useCase.update(data.id, data.user);
  return result;
}
