import { Request, Response, NextFunction} from 'express';
import { EmployeeService } from "../../../interfaces/services/EmployeeService";
import { validateId } from "../../company/validators/validateId";
import { responseSuccess } from "../../../shared/helpers/responseSuccess";
import { validateCreateEmployee } from '../validators/validateCreateEmployee';
import { validateUpdateEmployee } from '../validators/validateUpdateEmployee';

export class EmployeeController {
    constructor(private readonly employeeService: EmployeeService) {}

    async create(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const data = validateCreateEmployee(req.body)

        const employee = await this.employeeService.create(data)

        return responseSuccess(res, employee, "Funcionário registrado com sucesso!", 201)
    }

    async findByCompanyId(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.companyId);

        const employees = await this.employeeService.findByCompanyId(id);

        return responseSuccess(res, employees, "Funcionários encontrados com sucesso!");
    }

    async findById(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.id);

        const employee = await this.employeeService.findById(id);

        return responseSuccess(res, employee, "Funcionário encontrado com sucesso!");
    }

    async delete(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.id);

        const employee = await this.employeeService.delete(id);

        return responseSuccess(res, employee, "Funcionário desativado com sucesso!");
    }

    async update(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const id = validateId(req.params.cnpj);
        const data = validateUpdateEmployee(req.body);

        const employee = await this.employeeService.update(id, data);

        return responseSuccess(res, employee, "Empresa atualizada com sucesso!");
    }
}
