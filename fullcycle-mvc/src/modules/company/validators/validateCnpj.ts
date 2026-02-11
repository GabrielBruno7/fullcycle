import { z } from "zod";
import { AppError } from "../../../shared/errors/AppError";

const cnpjSchema = z
  .string()
  .min(1, "CNPJ é obrigatório")
  .length(14, "CNPJ deve ter 14 caracteres")
;

export function validateCnpj(cnpj: unknown): string {
  const result = cnpjSchema.safeParse(cnpj);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Cnpj inválido";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
