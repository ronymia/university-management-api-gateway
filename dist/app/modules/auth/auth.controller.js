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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControllers = void 0;
const auth_service_1 = require("./auth.service");
const response_1 = __importDefault(require("../../../shared/response"));
const config_1 = __importDefault(require("../../../config"));
const http_status_1 = __importDefault(require("http-status"));
// LOGIN USER
const loginUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.loginUser(req);
        // console.log({ result });
        const _a = result.data, { refreshToken } = _a, rest = __rest(_a, ["refreshToken"]);
        // set refresh token to cookie
        const cookieOptions = {
            secure: config_1.default.env === 'production',
            httpOnly: true
        };
        res.cookie('refreshToken', refreshToken, cookieOptions);
        // SEND RESPONSE
        (0, response_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User login successfully !',
            data: rest
        });
    }
    catch (error) {
        next(error);
    }
});
// GET REFRESH TOKEN
const refreshToken = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.refreshToken(req);
        // const { refreshToken, ...rest } = result.data;
        // console.log({ result, rest });
        // set refresh token to cookie
        // const cookieOptions = {
        //   secure: config.env === 'production',
        //   httpOnly: true
        // };
        // res.cookie('refreshToken', refreshToken, cookieOptions);
        (0, response_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Get Refresh token successfully !',
            data: result.data
        });
    }
    catch (error) {
        next(error);
    }
});
// GET REFRESH TOKEN
const logout = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.logout(req);
        // delete refresh token from cookie
        res.clearCookie('refreshToken', {
            httpOnly: true,
            secure: config_1.default.env === 'production'
        });
        (0, response_1.default)(res, {
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'User logout success',
            data: result.data
        });
    }
    catch (error) {
        next(error);
    }
});
// CHANGE PASSWORD
const changePassword = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield auth_service_1.AuthServices.changePassword(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.AuthControllers = {
    logout,
    loginUser,
    refreshToken,
    changePassword
};
