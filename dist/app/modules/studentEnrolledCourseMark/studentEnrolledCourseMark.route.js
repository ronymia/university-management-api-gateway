"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEnrolledCourseMarkRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentEnrolledCourseMark_controller_1 = require("./studentEnrolledCourseMark.controller");
const router = express_1.default.Router();
router.route('/').get(studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkControllers.getAllStudentEnrolledCourseMarks);
router.route('/:id').get(studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkControllers.getSingleStudentEnrolledCourseMark);
router
    .route('/update-marks')
    .patch(studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkControllers.updateStudentEnrolledCourseMark);
router
    .route('/update-final-marks')
    .patch(studentEnrolledCourseMark_controller_1.StudentEnrolledCourseMarkControllers.updateStudentEnrolledCourseFinalMark);
// EXPORT ROUTERS
exports.StudentEnrolledCourseMarkRoutes = router;
