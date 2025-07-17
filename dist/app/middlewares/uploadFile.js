"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
// CONFIGURE FILE UPLOADER
const configureFileUpload = (fieldName, storageLocation) => {
    const fileStorage = multer_1.default.diskStorage({
        destination: (req, file, cb) => {
            if (!fs_1.default.existsSync(storageLocation)) {
                fs_1.default.mkdirSync(storageLocation, { recursive: true });
            }
            cb(null, storageLocation);
        },
        filename: (req, file, cb) => {
            const formattedFilename = `${file.fieldname}_${Date.now()}${path_1.default.extname(file.originalname)}`;
            cb(null, formattedFilename);
        }
    });
    return (0, multer_1.default)({ storage: fileStorage }).single(fieldName);
};
// Middleware wrapper for dynamic configuration
const uploadFile = (fieldName, storageLocation) => {
    const upload = configureFileUpload(fieldName, storageLocation);
    return (req, res, next) => {
        upload(req, res, (err) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }
            // Construct a relative path and attach to req if needed
            if (req.file) {
                req.fileRelativePath = path_1.default.posix.join(storageLocation.replace(/^uploads\//, ''), req.file.filename);
            }
            next();
        });
    };
};
exports.default = uploadFile;
