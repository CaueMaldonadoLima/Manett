import controller from "@/app/api/auth/controller";
import util from "@/app/api/utils";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result = await controller.signInEmail(data);
    return util.successResponse(result, "User signed in successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
