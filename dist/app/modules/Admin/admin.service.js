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
exports.AdminServices = void 0;
const axios_1 = require("../../../shared/axios");
// GET ALL ADMIN
const getAllAdmins = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/admins`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET ADMIN BU ID
const getSingleAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/admins/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE ADMIN
const updateAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { managementDepartment } = req.body;
    try {
        // GET MANAGEMENT DEPARTMENT
        // GET MANAGEMENT DEPARTMENT
        const getManagementDepartment = yield axios_1.AuthService.get(`/management-departments/${managementDepartment}`, {
            headers: {
                Authorization: req.headers.authorization
            }
        });
        // SET MANAGEMENT DEPARTMENT
        if (getManagementDepartment) {
            req.body.managementDepartment = (_a = getManagementDepartment === null || getManagementDepartment === void 0 ? void 0 : getManagementDepartment.data) === null || _a === void 0 ? void 0 : _a.id;
        }
    }
    catch (error) {
        // console.error({ error });
        throw new Error('Management-Department sync failed');
    }
    const result = yield axios_1.AuthService.patch(`/admins/${req.params.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE ADMIN
const deleteAdmin = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/admins/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.AdminServices = {
    getAllAdmins,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin
};
