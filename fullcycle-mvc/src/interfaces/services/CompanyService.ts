import { CreateCompanyDTO } from "../../modules/company/dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../../modules/company/dtos/UpdateCompanyDTO";

export interface CompanyService {
    create(createCompanyDTO: CreateCompanyDTO): Promise<unknown>;

    findAll(): Promise<unknown[]>;

    findByCnpj(cnpj: string): Promise<unknown>;

    findById(id: string): Promise<unknown>;

    delete(id: string): Promise<unknown>;

    update(id: string, updateCompanyDTO: Partial<UpdateCompanyDTO>): Promise<unknown>;
}