"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreService = exports.AuthService = exports.HttpService = void 0;
const axios_1 = __importDefault(require("axios"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("../config"));
const HttpService = (baseUrl) => {
    const axiosInstance = axios_1.default.create({
        baseURL: baseUrl,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    // Add request interceptor to log requests
    axiosInstance.interceptors.request.use((config) => {
        logger_1.default.info(`Request made to ${config.url}`);
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    // Add response interceptor to log responses
    axiosInstance.interceptors.response.use((response) => {
        logger_1.default.info(`Response received from ${response.config.url}`);
        return response.data;
    }, (error) => {
        return Promise.reject(error);
    });
    return axiosInstance;
};
exports.HttpService = HttpService;
const AuthService = HttpService(config_1.default.authServiceUrl);
exports.AuthService = AuthService;
const CoreService = HttpService(config_1.default.coreServiceUrl);
exports.CoreService = CoreService;
