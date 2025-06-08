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
exports.OfferedCourseServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE OFFERED COURSE
const createOfferedCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post('/offered-courses', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET SINGLE OFFERED COURSE
const getSingleOfferedCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/offered-courses/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL OFFERED COURSE
const getAllOfferedCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get('/offered-courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE OFFERED COURSE
const updateOfferedCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/offered-courses/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE OFFERED COURSE
const deleteOfferedCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/offered-courses/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.OfferedCourseServices = {
    createOfferedCourse,
    getSingleOfferedCourse,
    getAllOfferedCourses,
    updateOfferedCourse,
    deleteOfferedCourse
};
