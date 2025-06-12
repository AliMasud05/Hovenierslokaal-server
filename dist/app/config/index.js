"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config({ path: path_1.default.join((process.cwd(), ".env")) });
exports.default = {
    port: process.env.PORT || 5000,
    db_url: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    upload_path: process.env.UPLOAD_URL,
    jwt_otp_secret: process.env.JWT_OTP_SECRET,
    jwt_access_secret: process.env.JWT_ACCESS_SECRET,
    bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
    jwt_refresh_secret: process.env.JWT_REFRESH_SECRET,
    jwt_pass_reset_secret: process.env.JWT_PASS_RESET_SECRET,
    jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
    jwt_refresh_expires_in: process.env.JWT_REFRESH_EXPIRES_IN,
    jwt_pass_reset_expires_in: process.env.JWT_PASS_RESET_EXPIRES_IN,
    auth_user: process.env.AUTH_USER,
    auth_pass: process.env.AUTH_PASS,
    sendEmail: {
        email_from: process.env.EMAIL_FROM,
        brevo_pass: process.env.BREVO_PASS,
        brevo_email: process.env.BREVO_EMAIL,
    },
};
