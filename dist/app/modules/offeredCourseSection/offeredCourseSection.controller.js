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
exports.OfferedCourseSectionControllers = void 0;
const offeredCourseSection_service_1 = require("./offeredCourseSection.service");
const response_1 = __importDefault(require("../../../shared/response"));
// CREATE OFFERED COURSE SECTION
const createOfferedCourseSection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseSection_service_1.OfferedCourseSectionServices.createOfferedCourseSection(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET ALL OFFERED COURSE SECTION
const getAllOfferedCourseSections = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseSection_service_1.OfferedCourseSectionServices.getAllOfferedCourseSections(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// GET SINGLE OFFERED COURSE SECTION
const getSingleOfferedCourseSection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseSection_service_1.OfferedCourseSectionServices.getSingleOfferedCourseSection(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// UPDATE OFFERED COURSE SECTION
const updateOfferedCourseSection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseSection_service_1.OfferedCourseSectionServices.updateOfferedCourseSection(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// DELETE OFFERED COURSE SECTION
const deleteOfferedCourseSection = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield offeredCourseSection_service_1.OfferedCourseSectionServices.deleteOfferedCourseSection(req);
        (0, response_1.default)(res, result);
    }
    catch (error) {
        next(error);
    }
});
// EXPORT CONTROLLERS
exports.OfferedCourseSectionControllers = {
    createOfferedCourseSection,
    getSingleOfferedCourseSection,
    getAllOfferedCourseSections,
    updateOfferedCourseSection,
    deleteOfferedCourseSection
};
