"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const router = express_1.default.Router();
router.get('/', academicFaculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculties);
router.get('/:id', academicFaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.post('/', academicFaculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router
    .route('/:id')
    .patch(academicFaculty_controller_1.AcademicFacultyControllers.updateAcademicFaculty)
    .delete(academicFaculty_controller_1.AcademicFacultyControllers.deleteAcademicFaculty);
// EXPORT ROUTERS
exports.AcademicFacultyRoutes = router;
