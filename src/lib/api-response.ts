import { NextResponse } from "next/server";

type ApiResponseOptions = {
  status?: number;
  data?: unknown;
  errors?: unknown;
};

export function apiSuccess(message: string, options: ApiResponseOptions = {}) {
  return NextResponse.json(
    {
      success: true,
      message,
      data: options.data,
    },
    { status: options.status ?? 200 },
  );
}

export function apiError(message: string, options: ApiResponseOptions = {}) {
  return NextResponse.json(
    {
      success: false,
      message,
      errors: options.errors,
    },
    { status: options.status ?? 400 },
  );
}
