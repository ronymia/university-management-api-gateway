"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offeredCourse_controller_1 = require("./offeredCourse.controller");
const router = express_1.default.Router();
router.route('/').get(offeredCourse_controller_1.OfferedCourseControllers.getAllOfferedCourses);
router.route('/:id').get(offeredCourse_controller_1.OfferedCourseControllers.getSingleOfferedCourse);
router.route('/').post(offeredCourse_controller_1.OfferedCourseControllers.createOfferedCourse);
router
    .route('/:id')
    .patch(offeredCourse_controller_1.OfferedCourseControllers.updateOfferedCourse)
    .delete(offeredCourse_controller_1.OfferedCourseControllers.deleteOfferedCourse);
// EXPORT ROUTERS
exports.OfferedCourseRoutes = router;
