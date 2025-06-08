"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const router = express_1.default.Router();
router.post('/login', 
// validateRequest(AuthValidation.loginZodSchema),
auth_controller_1.AuthControllers.loginUser);
router.post('/refresh-token', 
//   validateRequest(AuthValidation.refreshTokenZodSchema),
auth_controller_1.AuthControllers.refreshToken);
router.post('/change-password', 
//   validateRequest(AuthValidation.changePasswordZodSchema),
auth_controller_1.AuthControllers.changePassword);
exports.AuthRoutes = router;
