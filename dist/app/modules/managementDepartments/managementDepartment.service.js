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
exports.ManagementDepartmentServices = void 0;
const axios_1 = require("../../../shared/axios");
// CREATE Management Department
const createManagementDepartment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.post('/management-departments', req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ALL Management Department
const getAllManagementDepartments = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get('/management-departments', {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET SINGLE Management Department
const getSingleManagementDepartment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/management-departments/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE Management Department
const updateManagementDepartment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.patch(`/management-departments/${req.params.id}`, req.body, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE Management Department
const deleteManagementDepartment = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/management-departments/${req.params.id}`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.ManagementDepartmentServices = {
    createManagementDepartment,
    getAllManagementDepartments,
    getSingleManagementDepartment,
    updateManagementDepartment,
    deleteManagementDepartment
};
