import { $ZodCheckLessThan } from "zod/v4/core";
import { EmployeeRepository } from "../../../interfaces/repositories/EmployeeRepository";
import { NotFoundError } from "../../../shared/errors/AppError";
import { CreateEmployeeDTO } from "../dtos/CreateEmployeeDTO";
import { UpdateEmployeeDTO } from "../dtos/UpdateEmployeeDTO";
import { Employee } from "../models/Employee";
import { uuid } from "zod";


export class InMemoryEmployeeRepository implements EmployeeRepository {
    constructor() {}

    private employees: Employee[] = [];

    async create(createEmployeeDTO: CreateEmployeeDTO): Promise<Employee> {
        const newEmployee = {
            ...createEmployeeDTO,
            id: uuid(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        this.employees.push(newEmployee);

        return newEmployee;
    }

    async findByCompanyId(companyId: string): Promise<Employee[]> {
        return this.employees.filter(emp => emp.companyId === companyId);
    }

    async findById(id: string): Promise<Employee> {
        const employee = this.employees.find(emp => emp.id === id);

        if (!employee) {
            throw new NotFoundError(`Funcionario com o id ${id} não foi encontrado`);
        }

        return employee;
    }

    async delete(id: string): Promise<void> {
        const employeeIndex = this.employees.findIndex(emp => emp.id === id);

        if (employeeIndex === -1) {
            throw new NotFoundError(`Funcionario com o id ${id} não foi encontrado`);
        }

        this.employees.splice(employeeIndex, 1);
    }

    async update(id: string, updateEmployeeDTO: UpdateEmployeeDTO): Promise<Employee> {
        const employeeIndex = this.employees.findIndex(emp => emp.id === id);

        if (employeeIndex === -1) {
            throw new NotFoundError(`Funcionario com o id ${id} não foi encontrado`);
        }

        const updatedEmployee = {
            ...this.employees[employeeIndex],
            ...updateEmployeeDTO,
            updatedAt: new Date(),
        }

        this.employees[employeeIndex] = updatedEmployee;

        return updatedEmployee;
    }
}
