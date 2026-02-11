import { z } from "zod";
import { UpdateCompanyDTO } from '../dtos/UpdateCompanyDTO'
import { AppError } from "../../../shared/errors/AppError";

export const updateCompanySchema = z.object({
  email: z
    .string()
    .email("Email inválido")
    .optional(),

  phone: z
    .string()
    .min(10, "Telefone inválido")
    .optional(),

  address: z.object({
    street: z.string().optional(),
    number: z.string().optional(),
    city: z.string().optional(),
    zip: z.string().optional(),
    state: z.string().optional(),
  }),
});

export function validateUpdateCompany(input: unknown): UpdateCompanyDTO {
  const result = updateCompanySchema.safeParse(input);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Dados inválidos";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
