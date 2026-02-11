import { Router } from "express"
import { CompanyController } from "../controllers/CompanyController";
import { errorHandler } from "../../../shared/errors/errorHandler";
import { EmployeeController } from "../../employee/controllers/EmployeeController";


const router = Router();
const employeeController = new EmployeeController()

router.post("/", (req, res, next) => employeeController.create(req, res, next))
router.get("/", (req, res, next) => employeeController.create(req, res, next))
router.get("/:id", (req, res, next) => employeeController.findById(req, res, next))
router.get("/companyId/:companyId", (req, res, next) => employeeController.findByCompanyId(req, res, next))
router.put("/:id", (req, res, next) => employeeController.update(req, res, next))
router.delete("/:id", (req, res, next) => employeeController.delete(req, res, next))

router.use(errorHandler);

export default router