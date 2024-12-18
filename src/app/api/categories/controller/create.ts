import { z } from "zod";
import useCase from "@/app/api/categories/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertCategorySchema } from "../schema";

const schema = insertCategorySchema
  .strict()
  .omit({ id: true, createdAt: true, updatedAt: true });

export async function create(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to create category");

  const data = util.validateInput(input, schema);
  const category = {
    ...data,
    id: util.generateId(),
  };

  return await useCase.create(category, sessionId);
}
