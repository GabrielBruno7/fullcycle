import { CreateEmployeeDTO } from "../../modules/employee/dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../../modules/employee/dtos/UpdateEmployeeDTO";
import { Employee } from "../../modules/employee/models/Employee";


export interface EmployeeRepository {
    create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee>;

    findByCompanyId(companyId: string): Promise<Employee[]>;

    findById(id: string): Promise<Employee>;

    delete(id: string): Promise<void>;

    update(id: string, updateEmployeeDTO: Partial<UpdateEmployeeDTO>): Promise<Employee>;
}