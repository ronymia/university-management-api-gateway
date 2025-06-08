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
exports.RedisClient = void 0;
const redis_1 = require("redis");
const logger_1 = __importDefault(require("./logger"));
const redisClient = (0, redis_1.createClient)({
    // url: config.redis.url
    // password: process.env.REDIS_PASSWORD,
    username: 'default',
    password: 'ClYsS2MuKXp7su0HBbjlRGOZ3HbxzzOP',
    socket: {
        host: 'redis-10221.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
        port: 10221
    }
});
redisClient.on('error', (err) => logger_1.default.error('Redis Client Error', err));
redisClient.on('connect', () => logger_1.default.info('Redis Client Connected'));
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    yield redisClient.connect();
});
exports.RedisClient = {
    connect
};
// import { createClient } from 'redis';
// const client = createClient({
//     username: 'default',
//     password: 'ClYsS2MuKXp7su0HBbjlRGOZ3HbxzzOP',
//     socket: {
//         host: 'redis-10221.c212.ap-south-1-1.ec2.redns.redis-cloud.com',
//         port: 10221
//     }
// });
// client.on('error', err => console.log('Redis Client Error', err));
// await client.connect();
// await client.set('foo', 'bar');
// const result = await client.get('foo');
// console.log(result)  // >>> bar
