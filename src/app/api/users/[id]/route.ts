import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import controller from "@/app/api/users/controller";
import { handleError } from "@/app/api/errors";
import { User } from "@/app/api/users/schema";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  let user: User;
  try {
    user = await controller.getById(params, sessionId);
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

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const { data } = await request.json();
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  let result: User;
  try {
    // guarantee the id is the same as the one in the URL
    data.id = id;
    result = await controller.update(data, sessionId);
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

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  let result: User;
  try {
    result = await controller.remove(params, sessionId);
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
