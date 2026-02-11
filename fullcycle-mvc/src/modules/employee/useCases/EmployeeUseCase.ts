import { EmployeeRepository } from "../../../interfaces/repositories/EmployeeRepository";
import { EmployeeService } from "../../../interfaces/services/EmployeeService";
import { AppError, NotFoundError } from "../../../shared/errors/AppError";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { Employee } from "../models/Employee";

export class EmployeeUsecase implements EmployeeService {
    constructor(private readonly employeeRepository: EmployeeRepository) {}

    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        return await this.employeeRepository.create(createEmployeeDTO);
    }

    async findByCompanyId(companyId: string): Promise<Employee[]> {
        return await this.employeeRepository.findByCompanyId(companyId);
    }

    async findById(id: string): Promise<Employee> {
        return await this.employeeRepository.findById(id);
    }

    async delete(id: string): Promise<void> {
        const employee = await this.employeeRepository.findById(id);

        if(!employee) {
            throw new NotFoundError("Employee doesn't exist")
        }

        return await this.employeeRepository.delete(id);
    }

    async update(id: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> {
        const employee = await this.employeeRepository.findById(id);

        if(!employee) {
            throw new NotFoundError("Employee doesn't exist");
        }

        return await this.employeeRepository.update(id, updateEmployeeDTO);
    }
}