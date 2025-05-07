import repository from "@/app/api/auth/repository";
import { validateRequest } from "@/lib/auth/validateRequest";

export async function signOut() {
  // get session data
  const { session } = await validateRequest();

  // invalidate session (returns empty cookie)
  const emptyCookie = await repository.session.invalidate(session?.id ?? "");

  return emptyCookie;
}
