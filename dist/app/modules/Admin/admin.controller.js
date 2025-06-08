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
exports.AdminControllers = void 0;
const admin_service_1 = require("./admin.service");
const response_1 = __importDefault(require("../../../shared/response"));
// GET ALL ADMIN
const getAllAdmins = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admin_service_1.AdminServices.getAllAdmins(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ADMIN BY ID
const getSingleAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admin_service_1.AdminServices.getSingleAdmin(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE ADMIN
const updateAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admin_service_1.AdminServices.updateAdmin(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE ADMIN
const deleteAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield admin_service_1.AdminServices.deleteAdmin(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.AdminControllers = {
    getAllAdmins,
    getSingleAdmin,
    updateAdmin,
    deleteAdmin
};
