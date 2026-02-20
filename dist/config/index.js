"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const zod_1 = require("zod");
dotenv_1.default.config({ path: path_1.default.join(process.cwd(), '.env') });
const envVarsZodSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.string().default('development'),
    PORT: zod_1.z
        .string()
        .default('3030')
        .refine((val) => Number(val)),
    JWT_SECRET: zod_1.z.string(),
    REDIS_URL: zod_1.z.string(),
    AUTH_SERVICE_URL: zod_1.z.string(),
    CORE_SERVICE_URL: zod_1.z.string(),
    REDIS_USER_NAME: zod_1.z.string(),
    REDIS_PASSWORD: zod_1.z.string(),
    REDIS_HOST: zod_1.z.string(),
    REDIS_PORT: zod_1.z.string()
});
const envVars = envVarsZodSchema.parse(process.env);
exports.default = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    jwt: {
        secret: envVars.JWT_SECRET
    },
    redis: {
        url: envVars.REDIS_URL,
        userName: envVars.REDIS_USER_NAME,
        password: envVars.REDIS_PASSWORD,
        host: envVars.REDIS_HOST,
        port: envVars.REDIS_PORT
    },
    authServiceUrl: envVars.AUTH_SERVICE_URL,
    coreServiceUrl: envVars.CORE_SERVICE_URL
};
