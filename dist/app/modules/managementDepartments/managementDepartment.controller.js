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
exports.ManagementDepartmentControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const managementDepartment_service_1 = require("./managementDepartment.service");
// CREATE ROOM
const createManagementDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield managementDepartment_service_1.ManagementDepartmentServices.createManagementDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL Management Department
const getAllManagementDepartments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield managementDepartment_service_1.ManagementDepartmentServices.getAllManagementDepartments(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE Management Department
const getSingleManagementDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield managementDepartment_service_1.ManagementDepartmentServices.getSingleManagementDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE Management Department
const updateManagementDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield managementDepartment_service_1.ManagementDepartmentServices.updateManagementDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE Management Department
const deleteManagementDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield managementDepartment_service_1.ManagementDepartmentServices.deleteManagementDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.ManagementDepartmentControllers = {
    createManagementDepartment,
    getAllManagementDepartments,
    getSingleManagementDepartment,
    updateManagementDepartment,
    deleteManagementDepartment
};
