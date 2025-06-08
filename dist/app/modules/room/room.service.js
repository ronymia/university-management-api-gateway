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
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE ROOM
const createRoom = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post('/rooms', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL ROOM
const getAllRooms = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get('/rooms', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET SINGLE ROOM
const getSingleRoom = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/rooms/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE ROOM
const updateRoom = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/rooms/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE ROOM
const deleteRoom = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/rooms/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.RoomServices = {
    createRoom,
    getAllRooms,
    getSingleRoom,
    updateRoom,
    deleteRoom
};
