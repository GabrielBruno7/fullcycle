import { Router } from "express"
import { CompanyController } from "./controller/CompanyController";


const router = Router();
const companyController = new CompanyController()

router.post("/", (req, res, next) => companyController.create(req, res, next))

export default router