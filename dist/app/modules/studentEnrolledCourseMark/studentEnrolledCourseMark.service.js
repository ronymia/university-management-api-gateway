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
exports.StudentEnrolledCourseMarkServices = void 0;
const axios_1 = require("../../../shared/axios");
// const createStudentEnrolledCourseMark = async (req: Request): Promise<any> => {
//   const result = await HttpService.post('/student-enrolled-course-marks', req.body, {
//     headers: {
//       Authorization: req.headers.authorization
//     }
//   });
//   // RETURN
//   return result;
// };
const getAllStudentEnrolledCourseMarks = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/student-enrolled-course-marks`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const getSingleStudentEnrolledCourseMark = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/student-enrolled-course-marks/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const updateStudentEnrolledCourseMark = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/student-enrolled-course-marks/update-marks`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const updateStudentEnrolledCourseFinalMark = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/student-enrolled-course-marks/update-final-marks`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// const deleteStudentEnrolledCourseMark = async (req: Request): Promise<any> => {
//   const result = await HttpService.delete(`/student-enrolled-course-marks/${req.params.id}`, {
//     params: req.query,
//     headers: {
//       Authorization: req.headers.authorization
//     }
//   });
//   // RETURN
//   return result;
// };
// EXPORT SERVICES
exports.StudentEnrolledCourseMarkServices = {
    updateStudentEnrolledCourseFinalMark,
    updateStudentEnrolledCourseMark,
    getSingleStudentEnrolledCourseMark,
    getAllStudentEnrolledCourseMarks
};
