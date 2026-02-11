import {Request, Response} from 'express';
import { CompanyService } from '../service/CompanyService';
import { responseSuccess } from '../../../shared/helpers/responseSuccess';
import { validateCreateCompany } from '../validators/validateCreateCompany';
import { validateCnpj } from '../validators/validateCnpj';
import { validateId } from '../validators/validateId';
import { validateUpdateCompany } from '../validators/validateUpdateCompany';

export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    async create(req: Request, res: Response): Promise<Response> {
        const data = validateCreateCompany(req.body)

        const company = await this.companyService.create(data)

        return responseSuccess(res, company, "Empresa criada com sucesso!", 201)
    }

    async findAll(req: Request, res: Response): Promise<Response> {
        const companies = await this.companyService.findAll();

        return responseSuccess(res, companies, "Empresas encontradas com sucesso!");
    }

    async findByCnpj(req: Request, res: Response): Promise<Response> {
        const cnpj = validateCnpj(req.params.cnpj);

        const company = await this.companyService.findByCnpj(cnpj);

        return responseSuccess(res, company, "Empresa encontrada com sucesso!");
    }

    async findById(req: Request, res: Response): Promise<Response> {
        const id = validateId(req.params.cnpj);

        const company = await this.companyService.findById(id);

        return responseSuccess(res, company, "Empresa encontrada com sucesso!");
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const id = validateId(req.params.cnpj);

        const company = await this.companyService.delete(id);

        return responseSuccess(res, company, "Empresa desativada com sucesso!");
    }

    async update(req: Request, res: Response): Promise<Response> {
        const id = validateId(req.params.cnpj);
        const data = validateUpdateCompany(req.body);

        const company = await this.companyService.update(id, data);

        return responseSuccess(res, company, "Empresa atualizada com sucesso!");
    }
}
