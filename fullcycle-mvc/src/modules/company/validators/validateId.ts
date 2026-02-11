import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const idSchema = z.uuid();

export function validateId(id: unknown): string {
  const result = idSchema.safeParse(id);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Id inválido";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
