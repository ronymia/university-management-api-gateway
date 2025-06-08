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
exports.OfferedCourseControllers = void 0;
const offeredCourse_service_1 = require("./offeredCourse.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE OFFERED COURSE
const createOfferedCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourse_service_1.OfferedCourseServices.createOfferedCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL OFFERED COURSE
const getAllOfferedCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourse_service_1.OfferedCourseServices.getAllOfferedCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE OFFERED COURSE
const getSingleOfferedCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourse_service_1.OfferedCourseServices.getSingleOfferedCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE OFFERED COURSE
const updateOfferedCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourse_service_1.OfferedCourseServices.updateOfferedCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE OFFERED COURSE
const deleteOfferedCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourse_service_1.OfferedCourseServices.deleteOfferedCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.OfferedCourseControllers = {
    createOfferedCourse,
    getSingleOfferedCourse,
    getAllOfferedCourses,
    updateOfferedCourse,
    deleteOfferedCourse
};
