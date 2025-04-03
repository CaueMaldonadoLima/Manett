import controller from "@/app/api/auth/controller";
import util from "@/app/api/utils";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const result = await controller.register(data);
    return util.successResponse(result, "User registered successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
