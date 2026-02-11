import { Router } from "express"
import { errorHandler } from "../../../shared/errors/errorHandler";
import { EmployeeController } from "../../employee/controllers/EmployeeController";
import { EmployeeUsecase } from "../useCases/EmployeeUseCase";
import { InMemoryEmployeeRepository } from "../repositories/inMemoryEmployeeRepository";


const router = Router();
const employeeController = new EmployeeController(new EmployeeUsecase(new InMemoryEmployeeRepository()))

router.post("/", (req, res, next) => employeeController.create(req, res, next))
router.get("/", (req, res, next) => employeeController.create(req, res, next))
router.get("/:id", (req, res, next) => employeeController.findById(req, res, next))
router.get("/companyId/:companyId", (req, res, next) => employeeController.findByCompanyId(req, res, next))
router.put("/:id", (req, res, next) => employeeController.update(req, res, next))
router.delete("/:id", (req, res, next) => employeeController.delete(req, res, next))

router.use(errorHandler);

export default router