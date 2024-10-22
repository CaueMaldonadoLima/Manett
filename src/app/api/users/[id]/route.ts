import { cookies } from "next/headers";
import { lucia } from "@/lib/auth";
import controller from "../controller";

// get user
export async function GET(_: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const sessionId = cookies().get(lucia.sessionCookieName)?.value;

  // TODO: Fix type
  let user: any | undefined;
  try {
    user = await controller.getById(id, sessionId);
  } catch (error) {
    // TODO: return direct specific error if thats the case
    console.log(error);
    return Response.json({ status: 500, message: "Internal server error" });
  }

  return Response.json({
    status: 200,
    message: "User data retrieved successfully",
    data: user,
  });
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
    // TODO: return direct specific error if thats the case
    console.log(error);
    return Response.json({ status: 500, message: "Internal server error" });
  }

  return Response.json({
    status: 200,
    message: "User updated successfully",
    data: result,
  });
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
    // TODO: return direct specific error if thats the case
    console.log(error);
    return Response.json({ status: 500, message: "Internal server error" });
  }

  return Response.json({
    status: 200,
    message: "User deleted successfully",
    data: result,
  });
}
