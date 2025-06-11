"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const router = express_1.default.Router();
// const router = express.Router();
// GET specific and unique routes first
router.get('/get-my-registration', semesterRegistration_controller_1.SemesterRegistrationControllers.getMyRegistration);
router.get('/get-my-semester-courses', semesterRegistration_controller_1.SemesterRegistrationControllers.getMySemesterRegCourses);
// POST specific routes
router.post('/start-registration', semesterRegistration_controller_1.SemesterRegistrationControllers.startMyRegistration);
router.post('/enrolled-into-semester', semesterRegistration_controller_1.SemesterRegistrationControllers.enrollIntoSemesterRegistration);
router.post('/enrolled-into-course', semesterRegistration_controller_1.SemesterRegistrationControllers.enrolledIntoCourse);
router.post('/withdraw-from-enrolled-course', semesterRegistration_controller_1.SemesterRegistrationControllers.withdrawFromEnrolledCourse);
// POST confirm registration
router.post('/confirm-my-registration', semesterRegistration_controller_1.SemesterRegistrationControllers.confirmMyRegistration);
// Specific route must come BEFORE generic ':id'
router.post('/:id/start-new-semester', semesterRegistration_controller_1.SemesterRegistrationControllers.startNewSemester);
// Generic CRUD
router
    .route('/')
    .get(semesterRegistration_controller_1.SemesterRegistrationControllers.getAllSemesterRegistration)
    .post(semesterRegistration_controller_1.SemesterRegistrationControllers.createSemesterRegistration);
router
    .route('/:id')
    .get(semesterRegistration_controller_1.SemesterRegistrationControllers.getSingleSemesterRegistration)
    .patch(semesterRegistration_controller_1.SemesterRegistrationControllers.updateSemesterRegistration)
    .delete(semesterRegistration_controller_1.SemesterRegistrationControllers.deleteSemesterRegistration);
// EXPORT ROUTERS
exports.SemesterRegistrationRoutes = router;
