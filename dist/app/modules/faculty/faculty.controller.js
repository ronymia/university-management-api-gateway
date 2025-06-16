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
exports.FacultyControllers = void 0;
const response_1 = __importDefault(require("../../../shared/response"));
const faculty_service_1 = require("./faculty.service");
// GET ALL FACULTY
const getAllFacultiesFromCore = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.getAllFacultiesFromCore(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL FACULTY
const getAllFaculties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.getAllFaculties(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET FACULTY BY ID
const getSingleFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.getSingleFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE FACULTY
const updateFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.updateFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE FACULTY
const deleteFaculty = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.deleteFaculty(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL FACULTY
const myCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.myCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL FACULTY
const getMyCourseStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield faculty_service_1.FacultyServices.getMyCourseStudents(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.FacultyControllers = {
    getAllFacultiesFromCore,
    getAllFaculties,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty,
    myCourses,
    getMyCourseStudents
};
