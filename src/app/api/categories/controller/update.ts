import { z } from "zod";
import useCase from "@/app/api/categories/useCase";
import util from "@/app/api/utils";
import { UnauthenticatedError } from "@/app/api/errors";
import { insertCategorySchema } from "../schema";

const schema = insertCategorySchema
  .pick({
    title: true,
    description: true,
    iconName: true,
    parentCategoryId: true,
  })
  .partial()
  .extend({ id: z.string().trim().min(10) })
  .strict();

export async function update(
  input: z.infer<typeof schema>,
  sessionId: string | undefined,
) {
  if (!sessionId)
    throw new UnauthenticatedError("Must be logged in to update category");

  const data = util.validateInput(input, schema);

  return await useCase.update(data, sessionId);
}
