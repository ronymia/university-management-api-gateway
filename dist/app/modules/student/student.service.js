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
exports.StudentServices = void 0;
const axios_1 = require("../../../shared/axios");
// GET ALL STUDENT
const getAllStudents = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/students`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL STUDENT
// GET STUDENT BY ID
const getSingleStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/students/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE STUDENT
const updateStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { academicSemester, academicFaculty, academicDepartment } = req.body;
    try {
        // GET ACADEMIC SEMESTER
        const getAcademicSemester = yield axios_1.AuthService.get(`/academic-semesters?syncId=${academicSemester}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // console.log({ getAcademicSemester });
        if (getAcademicSemester && Array.isArray(getAcademicSemester.data)) {
            req.body.academicSemester = (_a = getAcademicSemester === null || getAcademicSemester === void 0 ? void 0 : getAcademicSemester.data[0]) === null || _a === void 0 ? void 0 : _a.id;
        }
        // GET ACADEMIC FACULTY
        const getAcademicFaculty = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // console.log({ getAcademicFaculty });
        if (getAcademicFaculty && Array.isArray(getAcademicFaculty.data)) {
            req.body.academicFaculty = (_b = getAcademicFaculty === null || getAcademicFaculty === void 0 ? void 0 : getAcademicFaculty.data[0]) === null || _b === void 0 ? void 0 : _b.id;
        }
        // GET ACADEMIC DEPARTMENT
        const getAcademicDepartment = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // console.log({ getAcademicDepartment });
        if (getAcademicDepartment && Array.isArray(getAcademicDepartment.data)) {
            //
            req.body.academicDepartment = (_c = getAcademicDepartment === null || getAcademicDepartment === void 0 ? void 0 : getAcademicDepartment.data[0]) === null || _c === void 0 ? void 0 : _c.id;
        }
    }
    catch (error) {
        // console.log({ error: error?.response, errorData: error?.response?.data });
        throw new Error('Academic-Semester/Academic-Faculty/Academic-Department sync failed');
    }
    //
    const result = yield axios_1.AuthService.patch(`/students/${req.params.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE STUDENT
const deleteStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/students/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const mySemesterRegCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/students/my-semester-reg-courses`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// MY COURSES
const myCourses = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/students/my-courses`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const myCourseSchedules = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/students/my-course-schedules`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const myAcademicInfo = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/students/my-academic-info`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.StudentServices = {
    getAllStudents,
    getSingleStudent,
    updateStudent,
    deleteStudent,
    myCourses,
    mySemesterRegCourses,
    myCourseSchedules,
    myAcademicInfo
};
