"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRoutes = void 0;
const express_1 = __importDefault(require("express"));
const admin_controller_1 = require("./admin.controller");
const router = express_1.default.Router();
// router.route('/').post(AdminControllers.createRoom);
router.route('/').get(admin_controller_1.AdminControllers.getAllAdmins);
router.route('/:id').get(admin_controller_1.AdminControllers.getSingleAdmin);
router.route('/:id').patch(admin_controller_1.AdminControllers.updateAdmin).delete(admin_controller_1.AdminControllers.deleteAdmin);
// EXPORT ROUTERS
exports.AdminRoutes = router;
