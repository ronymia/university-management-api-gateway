"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const faculty_controller_1 = require("./faculty.controller");
const router = express_1.default.Router();
// router.route('/').post(FacultyControllers.createRoom);
router.route('/').get(faculty_controller_1.FacultyControllers.getAllFaculties);
router.route('/:id').get(faculty_controller_1.FacultyControllers.getSingleFaculty);
router
    .route('/:id')
    .patch(faculty_controller_1.FacultyControllers.updateFaculty)
    .delete(faculty_controller_1.FacultyControllers.deleteFaculty);
// EXPORT ROUTERS
exports.FacultyRoutes = router;
