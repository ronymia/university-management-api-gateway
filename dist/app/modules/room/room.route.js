"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomRoutes = void 0;
const express_1 = __importDefault(require("express"));
const room_controller_1 = require("./room.controller");
const router = express_1.default.Router();
router.route('/').get(room_controller_1.RoomControllers.getAllRooms);
router.route('/:id').get(room_controller_1.RoomControllers.getSingleRoom);
router.route('/').post(room_controller_1.RoomControllers.createRoom);
router.route('/:id').patch(room_controller_1.RoomControllers.updateRoom).delete(room_controller_1.RoomControllers.deleteRoom);
// EXPORT ROUTERS
exports.RoomRoutes = router;
