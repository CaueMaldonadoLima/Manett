import controller from "@/app/api/categories/controller";
import util from "@/app/api/utils";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const sessionId = util.getSessionId();

  try {
    const result = await controller.getById(params, sessionId);
    return util.successResponse(result, "Category retrieved successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } },
) {
  const { id } = params;
  const sessionId = util.getSessionId();

  try {
    const data = await request.json();

    const result = await controller.update({ ...data, id: id }, sessionId);
    return util.successResponse(result, "Category updated successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}

export async function DELETE(
  _: Request,
  { params }: { params: { id: string } },
) {
  const sessionId = util.getSessionId();

  try {
    const result = await controller.remove(params, sessionId);
    return util.successResponse(result, "Category deleted successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
