import { CreateCompanyDTO } from "../../modules/company/dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../../modules/company/dtos/UpdateCompanyDTO";
import { Company } from "../../modules/company/models/Company";

export interface CompanyRepository {
    create(createCompanyDTO: CreateCompanyDTO): Promise<Company>;

    findAll(): Promise<Company[]>;

    findByCnpj(cnpj: string): Promise<Company>;

    findById(id: string): Promise<Company>;

    delete(id: string): Promise<unknown>;

    update(id: string, updateCompanyDTO: UpdateCompanyDTO): Promise<Company>;
}
