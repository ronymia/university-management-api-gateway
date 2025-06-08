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
exports.CourseServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE COURSE
const createCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post('/courses', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET SINGLE COURSE
const getSingleCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/courses/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.Authorization
        }
    });
    return result;
});
// GET ALL COURSE
const getAllCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get('/courses', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE COURSE
const updateCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/courses/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE COURSE
const deleteCourse = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/courses/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// ASSIGN FACULTIES
const assignFaculties = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post(`/courses/${req.params.id}/assigned-faculties`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// REMOVE FACULTIES
const removeFaculties = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/courses/${req.params.id}/remove-faculties`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.CourseServices = {
    createCourse,
    getAllCourses,
    getSingleCourse,
    updateCourse,
    deleteCourse,
    assignFaculties,
    removeFaculties
};
