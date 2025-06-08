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
exports.AcademicDepartmentControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const academicDepartment_service_1 = require("./academicDepartment.service");
// CREATE ACADEMIC DEPARTMENT
const createAcademicDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicDepartment_service_1.AcademicDepartmentServices.createAcademicDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE ACADEMIC DEPARTMENT
const getSingleAcademicDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicDepartment_service_1.AcademicDepartmentServices.getSingleAcademicDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL ACADEMIC DEPARTMENT
const getAllAcademicDepartments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicDepartment_service_1.AcademicDepartmentServices.getAllAcademicDepartments(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE ACADEMIC DEPARTMENT
const updateAcademicDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicDepartment_service_1.AcademicDepartmentServices.updateAcademicDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE ACADEMIC DEPARTMENT
const deleteAcademicDepartment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicDepartment_service_1.AcademicDepartmentServices.deleteAcademicDepartment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.AcademicDepartmentControllers = {
    createAcademicDepartment,
    updateAcademicDepartment,
    deleteAcademicDepartment,
    getAllAcademicDepartments,
    getSingleAcademicDepartment
};
