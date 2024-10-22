// Common
export class DatabaseOperationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class NotFoundError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class InputParseError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

// Authentication
export class AuthenticationError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class UnauthenticatedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string, options?: ErrorOptions) {
    super(message, options);
  }
}

const errorMap: Record<string, { status: number }> = {
  DatabaseOperationError: { status: 500 },
  NotFoundError: { status: 404 },
  InputParseError: { status: 400 },
  AuthenticationError: { status: 401 },
  UnauthenticatedError: { status: 401 },
  UnauthorizedError: { status: 403 },
};

export function handleError(error: Error) {
  const errorType = error.constructor.name;
  const { status } = errorMap[errorType] || { status: 500 };
  const message = error.message || "Internal server error";

  return Response.json({ message }, { status });
}
