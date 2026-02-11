import { CreateEmployeeDTO } from "../../modules/employee/dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../../modules/employee/dtos/UpdateEmployeeDTO";


export interface EmployeeService {
    create(createEmployeeDTO: CreateEmployeeDTO): Promise<unknown>;

    findAll(): Promise<unknown[]>;

    findByCompanyId(companyId: string): Promise<void[]>;

    findById(id: string): Promise<void>;

    delete(id: string): Promise<void>;

    update(id: string, updateEmployeeDTO: Partial<UpdateEmployeeDTO>): Promise<unknown>;
}