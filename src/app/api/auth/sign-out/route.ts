import { lucia } from "@/lib/auth";
import { validateRequest } from "@/lib/auth/validateRequest";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function GET() {
  const { session } = await validateRequest();

  if (session) await lucia.invalidateSession(session.id);

  const sessionCookie = lucia.createBlankSessionCookie();
  (await cookies()).set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );

  redirect("/login");
}
