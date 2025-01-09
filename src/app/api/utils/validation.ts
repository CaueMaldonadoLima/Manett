import { InputParseError } from "@/app/api/errors";
import { z } from "zod";

export function validateInput<T>(input: unknown, schema: z.Schema<T>): T {
  const result = schema.safeParse(input);

  if (!result.success)
    throw new InputParseError("Invalid input", { cause: result.error });

  return result.data;
}
