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
exports.AcademicSemesterControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const academicSemester_service_1 = require("./academicSemester.service");
// CREATE ACADEMIC SEMESTER
const createAcademicSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterServices.createAcademicSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL ACADEMIC SEMESTER
const getAllAcademicSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterServices.getAllAcademicSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE ACADEMIC SEMESTER
const getSingleAcademicSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterServices.getSingleAcademicSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE ACADEMIC SEMESTER
const updateAcademicSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterServices.updateAcademicSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE ACADEMIC SEMESTER
const deleteAcademicSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield academicSemester_service_1.AcademicSemesterServices.deleteAcademicSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    updateAcademicSemester,
    deleteAcademicSemester
};
