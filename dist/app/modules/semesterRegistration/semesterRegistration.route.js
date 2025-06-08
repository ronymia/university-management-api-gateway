"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const router = express_1.default.Router();
router.post('/get-my-registration', semesterRegistration_controller_1.SemesterRegistrationControllers.getMyRegistration);
router.route('/').get(semesterRegistration_controller_1.SemesterRegistrationControllers.getAllSemesterRegistration);
router.route('/:id').get(semesterRegistration_controller_1.SemesterRegistrationControllers.getSingleSemesterRegistration);
router.post('/enrolled-into-semester', semesterRegistration_controller_1.SemesterRegistrationControllers.enrollIntoSemesterRegistration);
router.post('/enrolled-into-course', semesterRegistration_controller_1.SemesterRegistrationControllers.enrolledIntoCourse);
router.post('/withdraw-from-enrolled-course', semesterRegistration_controller_1.SemesterRegistrationControllers.withdrawFromEnrolledCourse);
router.route('/:id/start-new-semester').post(semesterRegistration_controller_1.SemesterRegistrationControllers.startNewSemester);
router.route('/').post(semesterRegistration_controller_1.SemesterRegistrationControllers.createSemesterRegistration);
router
    .route('/confirm-my-registration')
    .patch(semesterRegistration_controller_1.SemesterRegistrationControllers.confirmMyRegistration);
router
    .route('/:id')
    .patch(semesterRegistration_controller_1.SemesterRegistrationControllers.updateSemesterRegistration)
    .delete(semesterRegistration_controller_1.SemesterRegistrationControllers.deleteSemesterRegistration);
// EXPORT ROUTERS
exports.SemesterRegistrationRoutes = router;
