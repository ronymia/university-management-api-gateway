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
exports.AuthServices = void 0;
const axios_1 = require("../../../shared/axios");
const loginUser = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.post(`/auth/login`, req.body);
    // RETURN
    return result;
});
// UPDATE STUDENT
const refreshToken = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const { refreshToken } = req.cookies;
    const result = yield axios_1.AuthService.post(`/auth/refresh-token`, req.body, {
        headers: {
            cookie: `refreshToken=${refreshToken}`
        }
    });
    // RETURN
    return result;
});
// DELETE STUDENT
const changePassword = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.post(`/auth/change-password`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.AuthServices = {
    loginUser,
    refreshToken,
    changePassword
};
