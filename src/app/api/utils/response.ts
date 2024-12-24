export function successResponse(data: any, message = "Success", status = 200) {
  return Response.json({ message, data }, { status });
}

const errorMap: Record<string, { status: number }> = {
  DatabaseOperationError: { status: 500 },
  NotFoundError: { status: 404 },
  InputParseError: { status: 400 },
  AuthenticationError: { status: 401 },
  UnauthenticatedError: { status: 401 },
  UnauthorizedError: { status: 403 },
  UniqueConstraintError: { status: 409 },
};

export function errorResponse(error: Error) {
  const errorType = error.constructor.name;
  const { status } = errorMap[errorType] || { status: 500 };
  const message = error.message || "Internal server error";

  return Response.json({ message }, { status });
}
