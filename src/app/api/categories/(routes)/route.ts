import controller from "@/app/api/categories/controller";
import util from "@/app/api/utils";

export async function POST(request: Request) {
  const sessionId = util.getSessionId();

  try {
    const data = await request.json();

    const result = await controller.create(data, sessionId);
    return util.successResponse(result, "Category created successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
