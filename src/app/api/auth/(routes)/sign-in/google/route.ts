import controller from "@/app/api/auth/controller";
import util from "@/app/api/utils";

// Front should redirect to result url to sign in with Google,
// after that, google will automatically redirect to the callback route

export async function GET(): Promise<Response> {
  try {
    const result = await controller.signInGoogle();
    return util.successResponse(
      result,
      "Google sign in session created successfully",
    );
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
