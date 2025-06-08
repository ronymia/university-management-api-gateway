"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManagementDepartmentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const managementDepartment_controller_1 = require("./managementDepartment.controller");
const router = express_1.default.Router();
router.route('/').get(managementDepartment_controller_1.ManagementDepartmentControllers.getAllManagementDepartments);
router.route('/:id').get(managementDepartment_controller_1.ManagementDepartmentControllers.getSingleManagementDepartment);
router.route('/').post(managementDepartment_controller_1.ManagementDepartmentControllers.createManagementDepartment);
router
    .route('/:id')
    .patch(managementDepartment_controller_1.ManagementDepartmentControllers.updateManagementDepartment)
    .delete(managementDepartment_controller_1.ManagementDepartmentControllers.deleteManagementDepartment);
// EXPORT ROUTERS
exports.ManagementDepartmentRoutes = router;
