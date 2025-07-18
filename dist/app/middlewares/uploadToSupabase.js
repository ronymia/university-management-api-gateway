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
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const supabase_js_1 = require("@supabase/supabase-js");
// Setup Supabase client with service role key (⚠️ never expose this to frontend)
const supabase = (0, supabase_js_1.createClient)(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
// Configure multer to use memory storage
const upload = (0, multer_1.default)({
    storage: multer_1.default.memoryStorage(),
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});
// Actual middleware
const uploadToSupabase = (bucket, folder = '') => {
    return [
        upload.single('file'),
        (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                if (!req.file) {
                    return res.status(400).json({ error: 'No file uploaded' });
                }
                const file = req.file;
                const ext = path_1.default.extname(file.originalname);
                const filename = `${folder}${Date.now()}_${file.originalname}`;
                const { error, data } = yield supabase.storage.from(bucket).upload(filename, file.buffer, {
                    contentType: file.mimetype,
                    upsert: true
                });
                if (error) {
                    return res.status(500).json({ error: error.message });
                }
                const publicUrl = supabase.storage.from(bucket).getPublicUrl(filename).data.publicUrl;
                // Attach file URL to req object
                req.fileURL = publicUrl;
                next(); // continue to your controller
            }
            catch (err) {
                return res.status(500).json({ error: 'Upload failed', details: err });
            }
        })
    ];
};
exports.default = uploadToSupabase;
