"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicDepartment_controller_1 = require("./academicDepartment.controller");
const router = express_1.default.Router();
router.get('/', academicDepartment_controller_1.AcademicDepartmentControllers.getAllAcademicDepartments);
router.get('/:id', academicDepartment_controller_1.AcademicDepartmentControllers.getSingleAcademicDepartment);
router.post('/', 
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
academicDepartment_controller_1.AcademicDepartmentControllers.createAcademicDepartment);
router
    .route('/:id')
    .patch(academicDepartment_controller_1.AcademicDepartmentControllers.updateAcademicDepartment)
    .delete(academicDepartment_controller_1.AcademicDepartmentControllers.deleteAcademicDepartment);
// EXPORT ROUTERS
exports.AcademicDepartmentRoutes = router;
