import controller from "@/app/api/entries/controller";
import util from "@/app/api/utils";

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const sessionId = util.getSessionId();

  try {
    const result = await controller.getById(params, sessionId);
    return util.successResponse(result, "Entry retrieved successfully");
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
    return util.successResponse(result, "Entry updated successfully");
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
    return util.successResponse(result, "Entry deleted successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
