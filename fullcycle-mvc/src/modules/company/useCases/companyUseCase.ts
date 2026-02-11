import { CompanyRepository } from "../../../interfaces/repositories/CompanyRepository";
import { CompanyService } from "../../../interfaces/services/CompanyService";
import { BadRequestError, NotFoundError } from "../../../shared/errors/AppError";
import { DocumentValidator } from "../../../shared/utils/documentValidator";
import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";
import { Company } from "../models/Company";

export class companyUseCase implements CompanyService {
    constructor(private readonly companyRepository: CompanyRepository) {}

    async create(createCompanyDTO: CreateCompanyDTO): Promise<Company> {
        if (!DocumentValidator.validateCNPJ(createCompanyDTO.cnpj)) {
            throw new BadRequestError("O CNPJ da empresa é incorreto");
        }

        const hasCompany = await this.companyRepository.findByCnpj(createCompanyDTO.cnpj);

        if (hasCompany) {
            throw new BadRequestError("CNPJ já pertence a outra empresa")
        }

        return await this.companyRepository.create(createCompanyDTO);
    }

    async findAll(): Promise<Company[]> {
        return await this.findAll();
    }

    async findByCnpj(cnpj: string): Promise<Company> {
        return await this.findByCnpj(cnpj);
    }

    async findById(id: string): Promise<Company> {
        return await this.findById(id);
    }

    async delete(id: string): Promise<unknown> {
        const company = await this.companyRepository.findById(id);

        if (!company) {
            throw new NotFoundError("Empresa não encontrada");
        }

        return await this.companyRepository.delete(id);
    }

    async update(id: string, updateCompanyDTO: Partial<UpdateCompanyDTO>): Promise<Company> {
        const hasCompany = await this.companyRepository.findById(id);

        if (!hasCompany) {
            throw new NotFoundError("Empresa não encontrada")
        }

        return await this.companyRepository.update(id, updateCompanyDTO);
    }
}
