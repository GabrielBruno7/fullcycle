import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";
import { UpdateCompanyDTO } from "../dtos/UpdateCompanyDTO";

export interface CompanyService {
    create(createCompanyDTO: CreateCompanyDTO): Promise<unknown>;

    findAll(): Promise<unknown[]>;

    findByCnpj(cnpj: string): Promise<unknown>;

    findById(id: string): Promise<unknown>;

    delete(id: string): Promise<unknown>;

    update(id: string, updateCompanyDTO: Partial<UpdateCompanyDTO>): Promise<unknown>;
}