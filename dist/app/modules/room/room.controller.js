"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomControllers = void 0;
const room_service_1 = require("./room.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE ROOM
const createRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield room_service_1.RoomServices.createRoom(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL ROOM
const getAllRooms = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield room_service_1.RoomServices.getAllRooms(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE ROOM
const getSingleRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield room_service_1.RoomServices.getSingleRoom(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE ROOM
const updateRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield room_service_1.RoomServices.updateRoom(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE ROOM
const deleteRoom = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield room_service_1.RoomServices.deleteRoom(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.RoomControllers = {
    createRoom,
    getAllRooms,
    getSingleRoom,
    updateRoom,
    deleteRoom
};
