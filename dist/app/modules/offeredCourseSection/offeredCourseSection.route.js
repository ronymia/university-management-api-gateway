"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseSectionRoutes = void 0;
const express_1 = __importDefault(require("express"));
const offeredCourseSection_controller_1 = require("./offeredCourseSection.controller");
const router = express_1.default.Router();
router.route('/').get(offeredCourseSection_controller_1.OfferedCourseSectionControllers.getAllOfferedCourseSections);
router.route('/:id').get(offeredCourseSection_controller_1.OfferedCourseSectionControllers.getSingleOfferedCourseSection);
router.route('/').post(offeredCourseSection_controller_1.OfferedCourseSectionControllers.createOfferedCourseSection);
router
    .route('/:id')
    .patch(offeredCourseSection_controller_1.OfferedCourseSectionControllers.updateOfferedCourseSection)
    .delete(offeredCourseSection_controller_1.OfferedCourseSectionControllers.deleteOfferedCourseSection);
// EXPORT ROUTERS
exports.OfferedCourseSectionRoutes = router;
