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
exports.StudentSemesterPaymentControllers = void 0;
const studentSemesterPayment_service_1 = require("./studentSemesterPayment.service");
const response_1 = __importDefault(require("../../../shared/response"));
const updateSemesterPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentSemesterPayment_service_1.StudentSemesterPaymentServices.updateSemesterPayment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getAllStudentSemesterPayments = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentSemesterPayment_service_1.StudentSemesterPaymentServices.getAllStudentSemesterPayments(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const getSingleStudentSemesterPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentSemesterPayment_service_1.StudentSemesterPaymentServices.getSingleStudentSemesterPayment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
const deleteStudentSemesterPayment = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield studentSemesterPayment_service_1.StudentSemesterPaymentServices.deleteStudentSemesterPayment(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.StudentSemesterPaymentControllers = {
    updateSemesterPayment,
    getAllStudentSemesterPayments,
    getSingleStudentSemesterPayment,
    deleteStudentSemesterPayment
};
