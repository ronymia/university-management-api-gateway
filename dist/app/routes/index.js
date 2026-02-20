"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_proxy_middleware_1 = require("http-proxy-middleware");
const config_1 = __importDefault(require("../../config"));
const router = express_1.default.Router();
const authServiceProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: config_1.default.authServiceUrl,
    changeOrigin: true,
    pathRewrite: (path, req) => req.originalUrl,
    on: {
        proxyReq: http_proxy_middleware_1.fixRequestBody,
        proxyRes: (proxyRes) => {
            delete proxyRes.headers['access-control-allow-origin'];
            delete proxyRes.headers['access-control-allow-credentials'];
            delete proxyRes.headers['access-control-allow-methods'];
            delete proxyRes.headers['access-control-allow-headers'];
            delete proxyRes.headers['access-control-expose-headers'];
        }
    }
});
const coreServiceProxy = (0, http_proxy_middleware_1.createProxyMiddleware)({
    target: config_1.default.coreServiceUrl,
    changeOrigin: true,
    pathRewrite: (path, req) => req.originalUrl,
    on: {
        proxyReq: http_proxy_middleware_1.fixRequestBody,
        proxyRes: (proxyRes) => {
            delete proxyRes.headers['access-control-allow-origin'];
            delete proxyRes.headers['access-control-allow-credentials'];
            delete proxyRes.headers['access-control-allow-methods'];
            delete proxyRes.headers['access-control-allow-headers'];
            delete proxyRes.headers['access-control-expose-headers'];
        }
    }
});
// Explicit Core Service endpoints nested under Auth-centric roots
const coreCustomRoutes = [
    '/students/my-courses',
    '/students/my-course-schedules',
    '/students/my-academic-info',
    '/faculties/my-courses',
    '/faculties/my-course-students',
    '/faculties/:id/assigned-courses',
    '/faculties/:id/remove-courses'
];
coreCustomRoutes.forEach((route) => {
    router.use(route, coreServiceProxy);
});
// Auth Service Routes
const authRoutes = [
    '/auth',
    '/users',
    '/admins',
    '/faculties',
    '/students',
    '/management-departments'
];
authRoutes.forEach((route) => {
    router.use(route, authServiceProxy);
});
// Core Service Routes
const coreRoutes = [
    '/academic-semesters',
    '/academic-faculties',
    '/academic-departments',
    '/buildings',
    '/rooms',
    '/courses',
    '/offered-courses',
    '/offered-course-sections',
    '/offered-course-class-schedules',
    '/semester-registrations',
    '/student-enrolled-courses',
    '/student-enrolled-course-marks',
    '/student-semester-payments'
];
coreRoutes.forEach((route) => {
    router.use(route, coreServiceProxy);
});
exports.default = router;
