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
exports.SemesterRegistrationControllers = void 0;
const semesterRegistration_service_1 = require("./semesterRegistration.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE SEMESTER REGISTRATION
const createSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.createSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL SEMESTER REGISTRATION
const getAllSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.getAllSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE SEMESTER REGISTRATION
const getSingleSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.getSingleSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE SEMESTER REGISTRATION
const updateSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.updateSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE SEMESTER REGISTRATION
const deleteSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.deleteSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const enrollIntoSemesterRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.enrollIntoSemesterRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const enrolledIntoCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.enrolledIntoCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const withdrawFromEnrolledCourse = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.withdrawFromEnrolledCourse(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const confirmMyRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.confirmMyRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMyRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.getMyRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const startNewSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.startNewSemester(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const startMyRegistration = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.startMyRegistration(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getMySemesterRegCourses = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semesterRegistration_service_1.SemesterRegistrationServices.getMySemesterRegCourses(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.SemesterRegistrationControllers = {
    createSemesterRegistration,
    getAllSemesterRegistration,
    getSingleSemesterRegistration,
    updateSemesterRegistration,
    deleteSemesterRegistration,
    enrollIntoSemesterRegistration,
    enrolledIntoCourse,
    withdrawFromEnrolledCourse,
    confirmMyRegistration,
    getMyRegistration,
    startNewSemester,
    startMyRegistration,
    getMySemesterRegCourses
};
