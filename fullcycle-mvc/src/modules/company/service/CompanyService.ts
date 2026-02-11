import { CreateCompanyDTO } from "../dtos/CreateCompanyDTO";

export interface CompanyService {
    create(createCompanyDTO: CreateCompanyDTO): Promise<any>;

}