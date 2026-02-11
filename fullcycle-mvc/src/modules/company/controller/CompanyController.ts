import {Request, Response} from 'express';
import { validateCreateCompany } from '../dtos/CreateCompanyDTO';
import { CompanyService } from '../service/CompanyService';
import { responseSuccess } from '../../../shared/helpers/responseSuccess';
import { responseError } from '../../../shared/helpers/responseError';

export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response): Promise<Response> {
        const data = validateCreateCompany(req.body)

        const company = await this.companyService.create(data)

        return responseSuccess(res, company, "Empresa criada com sucesso!", 201)
    }
}
