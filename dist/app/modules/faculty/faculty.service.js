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
exports.FacultyServices = void 0;
const axios_1 = require("../../../shared/axios");
// GET ALL FACULTY
const getAllFaculties = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/faculties`, {
        params: req.query,
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// GET FACULTY BY ID
const getSingleFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.get(`/faculties/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// UPDATE FACULTY
const updateFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.patch(`/faculties/${req.params.id}`, req.body, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// DELETE FACULTY
const deleteFaculty = (req) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield axios_1.AuthService.delete(`/faculties/${req.params.id}`, {
        headers: {
            Authorization: req.headers.authorization
        }
    });
    // RETURN
    return result;
});
// EXPORT SERVICES
exports.FacultyServices = {
    getAllFaculties,
    getSingleFaculty,
    updateFaculty,
    deleteFaculty
};
