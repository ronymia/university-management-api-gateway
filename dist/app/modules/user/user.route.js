"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const user_validation_1 = require("./user.validation");
const uploadToSupabase_1 = __importDefault(require("../../middlewares/uploadToSupabase"));
const router = express_1.default.Router();
// CREATE STUDENT
router.route('/create-student').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
//   UserControllers.createStudent
(0, uploadToSupabase_1.default)('university-management', 'profile/'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createStudentZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createStudent(req, res, next);
});
// CREATE ADMIN
router.route('/create-admin').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
(0, uploadToSupabase_1.default)('university-management', 'profile/'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createAdminZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createAdmin(req, res, next);
});
// CREATE FACULTY
router.route('/create-faculty').post(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
// UserControllers.createFaculty
(0, uploadToSupabase_1.default)('university-management', 'profile/'), (req, res, next) => {
    req.body = user_validation_1.UserValidation.createFacultyZodSchema.parse(JSON.parse(req.body.data));
    return user_controller_1.UserControllers.createFaculty(req, res, next);
});
// GET ALL USERS
router.route('/').get(user_controller_1.UserControllers.getAllUsers);
// GET SINGLE USER
router.route('/update-profile-image').patch((0, uploadToSupabase_1.default)('university-management', 'profile/'), 
// UserControllers.updateProfilePicture
(req, res, next) => {
    req.body = JSON.parse(req.body.data);
    return user_controller_1.UserControllers.updateProfilePicture(req, res, next);
});
// GET SINGLE USER
router.route('/:id').get(user_controller_1.UserControllers.getSingleUser);
// UPDATE USER
router
    .route('/:id')
    .patch(
//   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
user_controller_1.UserControllers.updateUser
// FileUploadHelper.upload.single('file'),
// (req: Request, res: Response, next: NextFunction) => {
//   req.body = UserValidation.updateUserZodSchema.parse(JSON.parse(req.body.data));
//   return UserControllers.updateUser(req, res, next);
// }
)
    .delete(user_controller_1.UserControllers.deleteUser);
// EXPORT ROUTERS
exports.UserRoutes = router;
