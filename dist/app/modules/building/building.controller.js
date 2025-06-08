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
exports.BuildingControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const building_service_1 = require("./building.service");
// CREATE BUILDING
const createBuilding = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield building_service_1.BuildingServices.createBuilding(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET BUILDING
const getAllBuildings = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield building_service_1.BuildingServices.getAllBuildings(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE BUILDING
const getSingleBuilding = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield building_service_1.BuildingServices.getSingleBuilding(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE BUILDING
const updateBuilding = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield building_service_1.BuildingServices.updateBuilding(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE BUILDING
const deleteBuilding = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield building_service_1.BuildingServices.deleteBuilding(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.BuildingControllers = {
    createBuilding,
    getAllBuildings,
    getSingleBuilding,
    updateBuilding,
    deleteBuilding
};
