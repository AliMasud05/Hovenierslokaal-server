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
exports.AuthService = void 0;
const auth_utils_1 = require("./auth.utils");
const config_1 = __importDefault(require("../../config"));
const validateUser_1 = require("../../utils/validateUser");
const loginUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield (0, validateUser_1.validateUser)(payload === null || payload === void 0 ? void 0 : payload.email);
    const jwtPayload = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, { expiresIn: "1d" });
    return {
        accessToken,
    };
});
exports.AuthService = {
    loginUser,
};
