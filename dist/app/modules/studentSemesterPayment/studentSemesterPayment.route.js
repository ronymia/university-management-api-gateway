"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentSemesterPaymentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const studentSemesterPayment_controller_1 = require("./studentSemesterPayment.controller");
const router = express_1.default.Router();
router.route('/').get(studentSemesterPayment_controller_1.StudentSemesterPaymentControllers.getAllStudentSemesterPayments);
router.route('/:id').get(studentSemesterPayment_controller_1.StudentSemesterPaymentControllers.getSingleStudentSemesterPayment);
router
    .route('/:id')
    .patch(studentSemesterPayment_controller_1.StudentSemesterPaymentControllers.updateSemesterPayment)
    .delete(studentSemesterPayment_controller_1.StudentSemesterPaymentControllers.deleteStudentSemesterPayment);
// EXPORT ROUTERS
exports.StudentSemesterPaymentRoutes = router;
