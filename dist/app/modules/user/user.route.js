"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const fileUploadHelper_1 = require("../../../helpers/fileUploadHelper");
const user_validation_1 = require("./user.validation");
const router = express_1.default.Router();
// CREATE STUDENT
router.route('/create-student').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   UserControllers.createStudent
fileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createStudent(req, res, next);
});
// CREATE ADMIN
router.route('/create-admin').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
// UserControllers.createAdmin
fileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createAdminZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createAdmin(req, res, next);
});
// CREATE FACULTY
router.route('/create-faculty').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
// UserControllers.createFaculty
fileUploadHelper_1.FileUploadHelper.upload.single('file'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createFacultyZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createFaculty(req, res, next);
});
// EXPORT ROUTERS
exports.UserRoutes = router;
