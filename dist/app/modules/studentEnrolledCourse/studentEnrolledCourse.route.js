"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentEnrolledCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentEnrolledCourse_controller_1 = require("./studentEnrolledCourse.controller");
const router = express_1.default.Router();
router.route('/').get(studentEnrolledCourse_controller_1.StudentEnrolledCourseControllers.getAllStudentEnrolledCourses);
router.route('/:id').get(studentEnrolledCourse_controller_1.StudentEnrolledCourseControllers.getSingleStudentEnrolledCourse);
router.route('/').post(studentEnrolledCourse_controller_1.StudentEnrolledCourseControllers.createStudentEnrolledCourse);
router
    .route('/:id')
    .patch(studentEnrolledCourse_controller_1.StudentEnrolledCourseControllers.updateStudentEnrolledCourse)
    .delete(studentEnrolledCourse_controller_1.StudentEnrolledCourseControllers.deleteStudentEnrolledCourse);
// EXPORT ROUTERS
exports.StudentEnrolledCourseRoutes = router;
