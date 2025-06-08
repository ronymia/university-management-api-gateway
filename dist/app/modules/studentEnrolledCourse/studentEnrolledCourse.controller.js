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
exports.StudentEnrolledCourseControllers = void 0;
const studentEnrolledCourse_service_1 = require("./studentEnrolledCourse.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE STUDENT ENROLLED COURSE
const createStudentEnrolledCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourse_service_1.StudentEnrolledCourseServices.createStudentEnrolledCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL STUDENT ENROLLED COURSE
const getAllStudentEnrolledCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourse_service_1.StudentEnrolledCourseServices.getAllStudentEnrolledCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE STUDENT ENROLLED COURSE
const getSingleStudentEnrolledCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourse_service_1.StudentEnrolledCourseServices.getSingleStudentEnrolledCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE STUDENT ENROLLED COURSE
const updateStudentEnrolledCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourse_service_1.StudentEnrolledCourseServices.updateStudentEnrolledCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE STUDENT ENROLLED COURSE
const deleteStudentEnrolledCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentEnrolledCourse_service_1.StudentEnrolledCourseServices.deleteStudentEnrolledCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.StudentEnrolledCourseControllers = {
    createStudentEnrolledCourse,
    getAllStudentEnrolledCourses,
    getSingleStudentEnrolledCourse,
    updateStudentEnrolledCourse,
    deleteStudentEnrolledCourse
};
