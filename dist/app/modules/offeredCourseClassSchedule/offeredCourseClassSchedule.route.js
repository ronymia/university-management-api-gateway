"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseClassScheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offeredCourseClassSchedule_controller_1 = require("./offeredCourseClassSchedule.controller");
const router = express_1.default.Router();
router.route('/').get(offeredCourseClassSchedule_controller_1.OfferedCourseClassScheduleControllers.getAllOfferedCourseClassSchedules);
router.route('/:id').get(offeredCourseClassSchedule_controller_1.OfferedCourseClassScheduleControllers.getSingleOfferedCourseClassSchedule);
router.route('/').post(offeredCourseClassSchedule_controller_1.OfferedCourseClassScheduleControllers.createOfferedCourseClassSchedule);
router
    .route('/:id')
    .patch(offeredCourseClassSchedule_controller_1.OfferedCourseClassScheduleControllers.updateOfferedCourseClassSchedule)
    .delete(offeredCourseClassSchedule_controller_1.OfferedCourseClassScheduleControllers.deleteOfferedCourseClassSchedule);
// EXPORT ROUTERS
exports.OfferedCourseClassScheduleRoutes = router;
