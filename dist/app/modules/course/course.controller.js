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
exports.CourseControllers = void 0;
const course_service_1 = require("./course.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE COURSE
const createCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.createCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL COURSE
const getAllCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.getAllCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE COURSE
const getSingleCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.getSingleCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE COURSE
const updateCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.updateCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE COURSE
const deleteCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.deleteCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// ASSIGN FACULTIES
const assignFaculties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.assignFaculties(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// REMOVE FACULTIES
const removeFaculties = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield course_service_1.CourseServices.removeFaculties(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.CourseControllers = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    assignFaculties,
    removeFaculties
};
