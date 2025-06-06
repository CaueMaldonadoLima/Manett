import controller from "@/app/api/bank-accounts/controller";
import util from "@/app/api/utils";

export async function GET(_: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const sessionId = util.getSessionId();

  try {
    const result = await controller.getById(params, sessionId);
    return util.successResponse(result, "Bank account retrieved successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}

export async function PATCH(request: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { id } = params;
  const sessionId = util.getSessionId();

  try {
    const data = await request.json();

    const result = await controller.update({ ...data, id: id }, sessionId);
    return util.successResponse(result, "Bank account updated successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}

export async function DELETE(_: Request, props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const sessionId = util.getSessionId();

  try {
    const result = await controller.remove(params, sessionId);
    return util.successResponse(result, "Bank account deleted successfully");
  } catch (error) {
    return util.errorResponse(error as Error);
  }
}
