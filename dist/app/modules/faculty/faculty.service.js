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
exports.FacultyServices = void 0;
const axios_1 = require("../../../shared/axios");
// GET ALL FACULTY
const getAllFacultiesFromCore = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/faculties`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL FACULTY
const getAllFaculties = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/faculties`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET FACULTY BY ID
const getSingleFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/faculties/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE FACULTY
const updateFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const { academicFaculty, academicDepartment } = req.body;
    try {
        const facultyRes = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`, {
            headers: { authorization: req.headers.authorization }
        });
        // console.log('Faculty response:', facultyRes.data);
        if ((_a = facultyRes === null || facultyRes === void 0 ? void 0 : facultyRes.data) === null || _a === void 0 ? void 0 : _a.length) {
            req.body.academicFaculty = facultyRes.data[0].id;
        }
        const deptRes = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`, {
            headers: { Authorization: req.headers.authorization }
        });
        // console.log('Department response:', deptRes.data);
        if ((_b = deptRes === null || deptRes === void 0 ? void 0 : deptRes.data) === null || _b === void 0 ? void 0 : _b.length) {
            req.body.academicDepartment = deptRes.data[0].id;
        }
    }
    catch (error) {
        console.error('Sync API error:', error);
        throw new Error('Faculty/Department sync failed');
    }
    // MADE REQUEST for update
    const result = yield axios_1.AuthService.patch(`/faculties/${req.params.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE FACULTY
const deleteFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/faculties/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const assignCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.post(`/faculties/${req.params.id}/assigned-courses`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const removeCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/faculties/${req.params.id}/remove-courses`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL FACULTY
const myCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/faculties/my-courses`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL FACULTY
const getMyCourseStudents = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/faculties/my-course-students`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.FacultyServices = {
    getAllFacultiesFromCore,
    getAllFaculties,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty,
    assignCourses,
    removeCourses,
    myCourses,
    getMyCourseStudents
};
