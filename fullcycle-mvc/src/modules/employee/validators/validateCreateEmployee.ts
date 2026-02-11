import { z } from "zod";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { AppError } from "../../../shared/errors/AppError";

export const createEmployeeSchema = z.object({
  name: z.string().nonempty("O campo nome é obrigatório"),
  
  cpf: z
    .string()
    .nonempty("O campo CPF é obrigatório")
    .regex(/^\d{11}$/, "CPF deve ter 11 dígitos"),

  age: z
    .number({ invalid_type_error: "Idade deve ser um número" })
    .min(18, "O funcionário deve ter no mínimo 18 anos")
    .max(100, "O funcionário deve ter no máximo 100 anos"),

  phone: z
    .string()
    .nonempty("O campo telefone é obrigatório")
    .regex(/^\d{10,11}$/, "Telefone deve ter 10 ou 11 dígitos"),

  position: z.string().nonempty("O campo cargo é obrigatório"),

  salary: z
    .number({ invalid_type_error: "Salário deve ser um número" })
    .min(0, "O salário não pode ser negativo"),

  email: z
    .string()
    .email("Email inválido")
    .optional(),

  companyId: z.string().uuid("ID da empresa inválido")
});

export function validateCreateEmployee(input: unknown): CreateEmployeeDTO {
  const result = createEmployeeSchema.safeParse(input);

  if (!result.success) {
    const errorMessage = result.error.errors[0]?.message || "Dados inválidos";
    throw new AppError(errorMessage, 400);
  }

  return result.data;
}
