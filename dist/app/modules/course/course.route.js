"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const course_controller_1 = require("./course.controller");
const router = express_1.default.Router();
router.route('/').get(course_controller_1.CourseControllers.getAllCourses);
router.route('/:id').get(course_controller_1.CourseControllers.getSingleCourse);
router.route('/').post(course_controller_1.CourseControllers.createCourse);
router.route('/:id').patch(course_controller_1.CourseControllers.updateCourse);
router.route('/:ids').delete(course_controller_1.CourseControllers.deleteCourse);
router.route(`/:id/assigned-faculties`).post(course_controller_1.CourseControllers.assignFaculties);
router.route('/:id/remove-faculties').delete(course_controller_1.CourseControllers.removeFaculties);
// EXPORT ROUTERS
exports.CourseRoutes = router;
