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
exports.UserServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE STUDENT
const createStudent = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const file = req.file;
    // console.log({ uploadImage: file });
    // const uploadImage = await FileUploadHelper.uploadToCloudinary(file);
    // console.log({ data: req.body });
    req.body.student.profileImage = file.path;
    const { academicSemester, academicFaculty, academicDepartment } = req.body.student;
    // GET ACADEMIC SEMESTER
    const getAcademicSemester = yield axios_1.AuthService.get(`/academic-semesters?syncId=${academicSemester}`);
    if (getAcademicSemester && Array.isArray(getAcademicSemester.data)) {
        req.body.student.academicSemester = (_a = getAcademicSemester === null || getAcademicSemester === void 0 ? void 0 : getAcademicSemester.data[0]) === null || _a === void 0 ? void 0 : _a.id;
    }
    // GET ACADEMIC FACULTY
    const getAcademicFaculty = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`);
    if (getAcademicFaculty && Array.isArray(getAcademicFaculty.data)) {
        req.body.student.academicFaculty = (_b = getAcademicFaculty === null || getAcademicFaculty === void 0 ? void 0 : getAcademicFaculty.data[0]) === null || _b === void 0 ? void 0 : _b.id;
    }
    // GET ACADEMIC DEPARTMENT
    const getAcademicDepartment = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`);
    if (getAcademicDepartment && Array.isArray(getAcademicDepartment.data)) {
        //
        req.body.student.academicDepartment = (_c = getAcademicDepartment === null || getAcademicDepartment === void 0 ? void 0 : getAcademicDepartment.data[0]) === null || _c === void 0 ? void 0 : _c.id;
    }
    // console.log({ data: req.body });
    // CREATE STUDENT ON MONGODB
    const result = yield axios_1.AuthService.post('users/create-student', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// CREATE ADMIN
const createAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    const file = req.file;
    // console.log({ file });
    // const uploadImage = await FileUploadHelper.uploadToCloudinary(file);
    // console.log({ uploadImage });
    // SET PROFILE IMAGE
    req.body.admin.profileImage = file.path;
    // GET MANAGEMENT DEPARTMENT
    const { managementDepartment } = req.body.admin;
    // GET MANAGEMENT DEPARTMENT
    const getManagementDepartment = yield axios_1.AuthService.get(`/management-departments/${managementDepartment}`);
    // SET MANAGEMENT DEPARTMENT
    if (getManagementDepartment) {
        req.body.admin.managementDepartment = (_d = getManagementDepartment === null || getManagementDepartment === void 0 ? void 0 : getManagementDepartment.data) === null || _d === void 0 ? void 0 : _d.id;
    }
    // CREATE ADMIN ON MONGODB
    const result = yield axios_1.AuthService.post('users/create-admin', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN DATA
    return result;
});
// CREATE FACULTY
const createFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _e, _f;
    const { academicFaculty, academicDepartment } = req.body.faculty;
    const file = req.file;
    // console.log({ uploadImage: file });
    // const uploadImage = await FileUploadHelper.uploadToCloudinary(file);
    // console.log({ data: req.body });
    req.body.faculty.profileImage = file.path;
    // GET ACADEMIC FACULTY
    const getAcademicFaculty = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`);
    if (getAcademicFaculty && Array.isArray(getAcademicFaculty.data)) {
        req.body.faculty.academicFaculty = (_e = getAcademicFaculty === null || getAcademicFaculty === void 0 ? void 0 : getAcademicFaculty.data[0]) === null || _e === void 0 ? void 0 : _e.id;
    }
    // GET ACADEMIC DEPARTMENT
    const getAcademicDepartment = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`);
    if (getAcademicDepartment && Array.isArray(getAcademicDepartment.data)) {
        //
        req.body.faculty.academicDepartment = (_f = getAcademicDepartment === null || getAcademicDepartment === void 0 ? void 0 : getAcademicDepartment.data[0]) === null || _f === void 0 ? void 0 : _f.id;
    }
    // console.log({ data: req.body });
    // CREATE FACULTY ON MONGODB
    const result = yield axios_1.AuthService.post('users/create-faculty', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// EXPORT SERVICES
exports.UserServices = {
    createStudent,
    createAdmin,
    createFaculty
};
