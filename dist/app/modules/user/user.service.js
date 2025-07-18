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
    req.body.student.profileImage = (req === null || req === void 0 ? void 0 : req.fileURL) || '';
    const { academicSemester, academicFaculty, academicDepartment } = req.body.student;
    try {
        // GET ACADEMIC SEMESTER
        const getAcademicSemester = yield axios_1.AuthService.get(`/academic-semesters?syncId=${academicSemester}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // console.log({ getAcademicSemester });
        if (getAcademicSemester && Array.isArray(getAcademicSemester.data)) {
            req.body.student.academicSemester = (_a = getAcademicSemester === null || getAcademicSemester === void 0 ? void 0 : getAcademicSemester.data[0]) === null || _a === void 0 ? void 0 : _a.id;
        }
        // GET ACADEMIC FACULTY
        const getAcademicFaculty = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // console.log({ getAcademicFaculty });
        if (getAcademicFaculty && Array.isArray(getAcademicFaculty.data)) {
            req.body.student.academicFaculty = (_b = getAcademicFaculty === null || getAcademicFaculty === void 0 ? void 0 : getAcademicFaculty.data[0]) === null || _b === void 0 ? void 0 : _b.id;
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
            req.body.student.academicDepartment = (_c = getAcademicDepartment === null || getAcademicDepartment === void 0 ? void 0 : getAcademicDepartment.data[0]) === null || _c === void 0 ? void 0 : _c.id;
        }
    }
    catch (error) {
        // console.log({ error: error?.response, errorData: error?.response?.data });
        throw new Error('Academic-Semester/Academic-Faculty/Academic-Department sync failed');
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
    // SET PROFILE IMAGE
    req.body.admin.profileImage = (req === null || req === void 0 ? void 0 : req.fileURL) || '';
    // const { managementDepartment } = req.body.admin;
    // try {
    //   // GET MANAGEMENT DEPARTMENT
    //   const getManagementDepartment = await AuthService.get(
    //     `/management-departments/${managementDepartment}`,
    //     {
    //       headers: {
    //         Authorization: req.headers.authorization
    //       }
    //     }
    //   );
    //   // SET MANAGEMENT DEPARTMENT
    //   if (getManagementDepartment) {
    //     req.body.admin.managementDepartment = getManagementDepartment?.data?.id;
    //   }
    // } catch (error) {
    //   // console.error({ error });
    //   throw new Error('Management-Department sync failed');
    // }
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
    var _d, _e;
    const { academicFaculty, academicDepartment } = req.body.faculty;
    // SET PROFILE IMAGE
    req.body.faculty.profileImage = (req === null || req === void 0 ? void 0 : req.fileURL) || '';
    // console.log({ data: req.body });
    try {
        const facultyRes = yield axios_1.AuthService.get(`/academic-faculties?syncId=${academicFaculty}`, {
            headers: { authorization: req.headers.authorization }
        });
        // console.log('Faculty response:', facultyRes.data);
        if ((_d = facultyRes === null || facultyRes === void 0 ? void 0 : facultyRes.data) === null || _d === void 0 ? void 0 : _d.length) {
            req.body.faculty.academicFaculty = facultyRes.data[0].id;
        }
        const deptRes = yield axios_1.AuthService.get(`/academic-departments?syncId=${academicDepartment}`, {
            headers: { Authorization: req.headers.authorization }
        });
        // console.log('Department response:', deptRes.data);
        if ((_e = deptRes === null || deptRes === void 0 ? void 0 : deptRes.data) === null || _e === void 0 ? void 0 : _e.length) {
            req.body.faculty.academicDepartment = deptRes.data[0].id;
        }
    }
    catch (error) {
        throw new Error('Faculty/Department sync failed, Please try again');
    }
    // CREATE FACULTY ON MONGODB
    const result = yield axios_1.AuthService.post('users/create-faculty', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    return result;
});
// GET ALL ADMIN
const getAllUsers = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/users`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ADMIN BU ID
const getSingleUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/users/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE ADMIN
const updateUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.patch(`/users/${req.params.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE ADMIN
const deleteUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/users/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPLOAD PROFILE PICTURE
const updateProfilePicture = (req) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.profileImage = (req === null || req === void 0 ? void 0 : req.fileURL) || '';
    const result = yield axios_1.AuthService.patch(`/users/${req.body.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.UserServices = {
    createStudent,
    createAdmin,
    createFaculty,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    updateProfilePicture
};
