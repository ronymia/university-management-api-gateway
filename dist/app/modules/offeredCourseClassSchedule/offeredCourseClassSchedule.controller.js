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
exports.OfferedCourseClassScheduleControllers = void 0;
const offeredCourseClassSchedule_service_1 = require("./offeredCourseClassSchedule.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE OFFERED COURSE CLASS SCHEDULE
const createOfferedCourseClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleServices.createOfferedCourseClassSchedule(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL OFFERED COURSE CLASS SCHEDULE
const getAllOfferedCourseClassSchedules = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleServices.getAllOfferedCourseClassSchedules(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE OFFERED COURSE CLASS SCHEDULE
const getSingleOfferedCourseClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleServices.getSingleOfferedCourseClassSchedule(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE OFFERED COURSE CLASS SCHEDULE
const updateOfferedCourseClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleServices.updateOfferedCourseClassSchedule(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE OFFERED COURSE CLASS SCHEDULE
const deleteOfferedCourseClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseClassSchedule_service_1.OfferedCourseClassScheduleServices.deleteOfferedCourseClassSchedule(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.OfferedCourseClassScheduleControllers = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedules,
    getSingleOfferedCourseClassSchedule,
    updateOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
};
