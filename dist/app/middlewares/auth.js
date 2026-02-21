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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_1 = __importDefault(require("http-status"));
const apiError_1 = __importDefault(require("../../errors/apiError"));
const jwtHelper_1 = require("../../helpers/jwtHelper");
const auth = () => (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const publicRoutes = ['/api/v1/auth/login', '/api/v1/auth/refresh-token'];
        if (publicRoutes.includes(req.originalUrl)) {
            return next();
        }
        // get authorization token
        let token = req.headers.authorization;
        if (!token) {
            throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, 'You are not authorized! Token is missing.');
        }
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }
        // verify token
        let verifiedUser = null;
        try {
            verifiedUser = jwtHelper_1.JwtHelper.verifyToken(token);
        }
        catch (error) {
            throw new apiError_1.default(http_status_1.default.UNAUTHORIZED, 'Invalid or expired token!');
        }
        // attach user details to request for down-river services if needed
        req.user = verifiedUser;
        next();
    }
    catch (error) {
        next(error);
    }
});
exports.default = auth;
