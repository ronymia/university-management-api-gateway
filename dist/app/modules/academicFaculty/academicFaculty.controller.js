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
exports.AcademicFacultyControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const academicFaculty_service_1 = require("./academicFaculty.service");
// CREATE ACADEMIC FACULTY
const createAcademicFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicFaculty_service_1.AcademicFacultyServices.createAcademicFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL ACADEMIC FACULTY
const getAllAcademicFaculties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicFaculty_service_1.AcademicFacultyServices.getAllAcademicFaculties(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE ACADEMIC FACULTY
const getSingleAcademicFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicFaculty_service_1.AcademicFacultyServices.getSingleAcademicFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE ACADEMIC FACULTY
const updateAcademicFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicFaculty_service_1.AcademicFacultyServices.updateAcademicFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE ACADEMIC FACULTY
const deleteAcademicFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicFaculty_service_1.AcademicFacultyServices.deleteAcademicFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.AcademicFacultyControllers = {
    createAcademicFaculty,
    getAllAcademicFaculties,
    getSingleAcademicFaculty,
    updateAcademicFaculty,
    deleteAcademicFaculty
};
