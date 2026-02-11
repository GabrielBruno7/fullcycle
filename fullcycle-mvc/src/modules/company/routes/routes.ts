import { Router } from "express"
import { errorHandler } from "../../../shared/errors/errorHandler";
import { CompanyController } from "../controllers/CompanyController";
import { companyUseCase } from "../useCases/companyUseCase";


const router = Router();
const companyController = new CompanyController(new companyUseCase())

router.post("/", (req, res, next) => companyController.create(req, res, next))
router.get("/", (req, res, next) => companyController.create(req, res, next))
router.get("/:id", (req, res, next) => companyController.findById(req, res, next))
router.get("/cnpj/:cnpj", (req, res, next) => companyController.findByCnpj(req, res, next))
router.put("/:id", (req, res, next) => companyController.update(req, res, next))
router.delete("/:id", (req, res, next) => companyController.delete(req, res, next))

router.use(errorHandler);

export default router
