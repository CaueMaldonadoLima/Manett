import controller from "@/app/api/categories/controller";
import util from "@/app/api/utils";

export async function GET(_: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const sessionId = util.getSessionId();

  try {
    const result = await controller.getByUserId(
      { userId: params.id },
      sessionId,
    );
    return util.successResponse(result, "Categories retrieved successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
