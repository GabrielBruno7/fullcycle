import { z } from "zod";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { AppError } from "../../../shared/errors/AppError";

export const createCompanySchema = z.object({
  name: z
    .string()
    .min(1, "Nome é obrigatório")
    .min(3, "Nome deve ter pelo menos 3 caracteres"),

  email: z
    .string()
    .email("Email inválido")
    .optional(),

  cnpj: z
    .string()
    .min(1, "CNPJ é obrigatório")
    .length(14, "CNPJ deve ter 14 caracteres"),

  phone: z
    .string()
    .min(10, "Telefone inválido")
    .optional(),

  address: z.object({
    street: z.string().min(1, "Rua é obrigatória"),
    number: z.string().min(1, "Número é obrigatório"),
    city: z.string().min(1, "Cidade é obrigatória"),
    zip: z.string().min(1, "CEP é obrigatório"),
    state: z.string().min(1, "Estado é obrigatório"),
  }),
});

export function validateCreateCompany(input: unknown): CreateCompanyDTO {
  const result = createCompanySchema.safeParse(input);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Dados inválidos";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
