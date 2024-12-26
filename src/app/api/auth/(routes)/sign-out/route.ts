import controller from "@/app/api/auth/controller";
import util from "@/app/api/utils";

export async function GET() {
  try {
    const cookie = await controller.signOut();
    return util.successResponse(cookie, "User signed out successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
