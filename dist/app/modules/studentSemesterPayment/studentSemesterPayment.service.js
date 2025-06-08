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
exports.StudentSemesterPaymentServices = void 0;
const axios_1 = require("../../../shared/axios");
const updateSemesterPayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.patch(`/student-semester-payments/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const getAllStudentSemesterPayments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/student-semester-payments`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const getSingleStudentSemesterPayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.get(`/student-semester-payments/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
const deleteStudentSemesterPayment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.CoreService.delete(`/student-semester-payments/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
exports.StudentSemesterPaymentServices = {
    updateSemesterPayment,
    getAllStudentSemesterPayments,
    getSingleStudentSemesterPayment,
    deleteStudentSemesterPayment
};
