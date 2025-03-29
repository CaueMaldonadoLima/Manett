import { OAuth2RequestError } from "arctic";
import util from "@/app/api/utils";
import controller from "@/app/api/auth/controller";

export async function GET(request: Request): Promise<Response> {
  try {
    const url = new URL(request.url);
    const data = {
      code: url.searchParams.get("code"),
      state: url.searchParams.get("state"),
    };

    const result = await controller.googleCallback(data);
    return util.successResponse(result.user, "User signed in successfully");
  } catch (error) {
    if (error instanceof OAuth2RequestError)
      return Response.json({ status: 400, message: "Invalid code" });

    return util.errorResponse(error as Error);
  }
}
