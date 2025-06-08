"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const academicSemester_route_1 = require("../modules/academicSemester/academicSemester.route");
const academicFaculty_route_1 = require("../modules/academicFaculty/academicFaculty.route");
const academicDepartment_route_1 = require("../modules/academicDepartment/academicDepartment.route");
const building_route_1 = require("../modules/building/building.route");
const room_route_1 = require("../modules/room/room.route");
const course_route_1 = require("../modules/course/course.route");
const offeredCourse_route_1 = require("../modules/offeredCourse/offeredCourse.route");
const offeredCourseSection_route_1 = require("../modules/offeredCourseSection/offeredCourseSection.route");
const offeredCourseClassSchedule_route_1 = require("../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.route");
const semesterRegistration_route_1 = require("../modules/semesterRegistration/semesterRegistration.route");
const studentEnrolledCourse_route_1 = require("../modules/studentEnrolledCourse/studentEnrolledCourse.route");
const studentEnrolledCourseMark_route_1 = require("../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.route");
const studentSemesterPayment_route_1 = require("../modules/studentSemesterPayment/studentSemesterPayment.route");
const user_route_1 = require("../modules/user/user.route");
const admin_route_1 = require("../modules/Admin/admin.route");
const student_route_1 = require("../modules/student/student.route");
const faculty_route_1 = require("../modules/faculty/faculty.route");
const auth_route_1 = require("../modules/auth/auth.route");
const managementDepartment_route_1 = require("../modules/managementDepartments/managementDepartment.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/auth',
        routes: auth_route_1.AuthRoutes
    },
    {
        path: '/users',
        routes: user_route_1.UserRoutes
    },
    {
        path: '/admins',
        routes: admin_route_1.AdminRoutes
    },
    {
        path: '/faculties',
        routes: faculty_route_1.FacultyRoutes
    },
    {
        path: '/students',
        routes: student_route_1.StudentRoutes
    },
    {
        path: '/academic-semesters',
        routes: academicSemester_route_1.AcademicSemesterRoutes
    },
    {
        path: '/academic-faculties',
        routes: academicFaculty_route_1.AcademicFacultyRoutes
    },
    {
        path: '/academic-departments',
        routes: academicDepartment_route_1.AcademicDepartmentRoutes
    },
    {
        path: '/management-departments',
        routes: managementDepartment_route_1.ManagementDepartmentRoutes
    },
    {
        path: '/buildings',
        routes: building_route_1.BuildingRoutes
    },
    {
        path: '/rooms',
        routes: room_route_1.RoomRoutes
    },
    {
        path: '/courses',
        routes: course_route_1.CourseRoutes
    },
    {
        path: '/offered-courses',
        routes: offeredCourse_route_1.OfferedCourseRoutes
    },
    {
        path: '/offered-course-sections',
        routes: offeredCourseSection_route_1.OfferedCourseSectionRoutes
    },
    {
        path: '/offered-course-class-schedules',
        routes: offeredCourseClassSchedule_route_1.OfferedCourseClassScheduleRoutes
    },
    {
        path: '/semester-registrations',
        routes: semesterRegistration_route_1.SemesterRegistrationRoutes
    },
    {
        path: '/student-enrolled-courses',
        routes: studentEnrolledCourse_route_1.StudentEnrolledCourseRoutes
    },
    {
        path: '/student-enrolled-course-marks',
        routes: studentEnrolledCourseMark_route_1.StudentEnrolledCourseMarkRoutes
    },
    {
        path: '/student-semester-payments',
        routes: studentSemesterPayment_route_1.StudentSemesterPaymentRoutes
    }
];
//
moduleRoutes.forEach((route) => {
    router.use(route.path, route.routes);
});
exports.default = router;
