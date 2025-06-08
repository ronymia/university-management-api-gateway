"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const student_controller_1 = require("./student.controller");
const router = express_1.default.Router();
// router.route('/').post(StudentControllers.createRoom);
router.route('/').get(student_controller_1.StudentControllers.getAllStudents);
router.route('/:id').get(student_controller_1.StudentControllers.getSingleStudent);
router
    .route('/:id')
    .patch(student_controller_1.StudentControllers.updateStudent)
    .delete(student_controller_1.StudentControllers.deleteStudent);
// EXPORT ROUTERS
exports.StudentRoutes = router;
