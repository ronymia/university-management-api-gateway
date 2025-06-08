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
exports.BuildingServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE BUILDING
const createBuilding = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post('/buildings', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL BUILDING
const getAllBuildings = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get('/buildings', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// GET SINGLE BUILDING
const getSingleBuilding = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/buildings/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.Authorization
        }
    });
    return result;
});
// UPDATE BUILDING
const updateBuilding = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/buildings/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// DELETE BUILDING
const deleteBuilding = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/buildings/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// EXPORT SERVICES
exports.BuildingServices = {
    createBuilding,
    getAllBuildings,
    getSingleBuilding,
    updateBuilding,
    deleteBuilding
};
