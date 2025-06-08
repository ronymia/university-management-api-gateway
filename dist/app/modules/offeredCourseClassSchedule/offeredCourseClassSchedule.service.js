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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseClassScheduleServices = void 0;
const axios_1 = require("../../../shared/axios");
const createOfferedCourseClassSchedule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post('/offered-course-class-schedules', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const getAllOfferedCourseClassSchedules = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get('/offered-course-class-schedules', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const getSingleOfferedCourseClassSchedule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/offered-course-class-schedules/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const updateOfferedCourseClassSchedule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/offered-course-class-schedules/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const deleteOfferedCourseClassSchedule = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/offered-course-class-schedules/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.OfferedCourseClassScheduleServices = {
    createOfferedCourseClassSchedule,
    getAllOfferedCourseClassSchedules,
    getSingleOfferedCourseClassSchedule,
    updateOfferedCourseClassSchedule,
    deleteOfferedCourseClassSchedule
};
