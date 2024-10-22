import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import controller from "../controller";
import { handleError } from "../../errors";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  // TODO: Fix type
  let user: any | undefined;
  try {
    user = await controller.getById(id, sessionId);
  } catch (error) {
    return handleError(error as Error);
  }

  return Response.json(
    {
      message: "User data retrieved successfully",
      data: user,
    },
    { status: 200 },
  );
}

// update user
export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { email, ...updates } = await request.json();
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  // TODO: Fix type
  let result: any | undefined;
  try {
    result = await controller.update({ id, user: updates }, sessionId);
  } catch (error) {
    return handleError(error as Error);
  }

  return Response.json(
    {
      message: "User updated successfully",
      data: result,
    },
    { status: 200 },
  );
}

// make sure to confirm this multiple times in the frontend
export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  // TODO: Fix type
  let result: any | undefined;
  try {
    result = await controller.remove(id, sessionId);
  } catch (error) {
    return handleError(error as Error);
  }

  return Response.json(
    {
      message: "User deleted successfully",
      data: result,
    },
    { status: 200 },
  );
}
