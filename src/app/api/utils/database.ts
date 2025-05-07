import { generateIdFromEntropySize } from "lucia";

export function generateId(): string {
  return generateIdFromEntropySize(10); // 16 characters long
}
