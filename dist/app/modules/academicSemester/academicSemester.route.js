"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const router = express_1.default.Router();
router.get('/', academicSemester_controller_1.AcademicSemesterControllers.getAllAcademicSemester);
router.get('/:id', academicSemester_controller_1.AcademicSemesterControllers.getSingleAcademicSemester);
router.post('/', academicSemester_controller_1.AcademicSemesterControllers.createAcademicSemester);
router
    .route('/:id')
    .patch(academicSemester_controller_1.AcademicSemesterControllers.updateAcademicSemester)
    .delete(academicSemester_controller_1.AcademicSemesterControllers.deleteAcademicSemester);
// EXPORT ROUTERS
exports.AcademicSemesterRoutes = router;
