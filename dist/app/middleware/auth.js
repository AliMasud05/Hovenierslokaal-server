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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const catchAsync_1 = __importDefault(require("../utils/catchAsync"));
const http_status_codes_1 = require("http-status-codes");
const appError_1 = __importDefault(require("../errors/appError"));
const user_model_1 = __importDefault(require("../modules/user/user.model"));
const auth = (...requiredRoles) => {
    return (0, catchAsync_1.default)((req, _res, next) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        let token = req.headers.authorization;
        if (token && token.startsWith("Bearer")) {
            token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1].trim();
        }
        // If the token send from the client
        if (!token) {
            throw new appError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized!");
        }
        // Check if the token is valid
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
        const { role, email } = decoded;
        const user = yield user_model_1.default.isUserExistsByEmail(email);
        // Checking if the user is exist
        if (!user) {
            throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "User not found!");
        }
        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new appError_1.default(http_status_codes_1.StatusCodes.UNAUTHORIZED, "You are not authorized!");
        }
        req.user = decoded;
        next();
    }));
};
exports.default = auth;
