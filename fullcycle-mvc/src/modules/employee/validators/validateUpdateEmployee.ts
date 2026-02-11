
import { z } from "zod";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";

export const updateEmployeeSchema = z.object({
  position: z.string().optional(),

  salary: z
    .number({ invalid_type_error: "Salário deve ser um número" })
    .min(0, "O salário não pode ser negativo")
    .optional(),
});

export function validateUpdateEmployee(input: unknown): UpdateEmployeeDTO {
  const result = updateEmployeeSchema.safeParse(input);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Dados inválidos";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
