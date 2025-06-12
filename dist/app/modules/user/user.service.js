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
exports.UserServices = void 0;
const user_interface_1 = require("./user.interface");
const user_model_1 = __importDefault(require("./user.model"));
const auth_utils_1 = require("../auth/auth.utils");
const config_1 = __importDefault(require("../../config"));
// Function to register user
const registerUser = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    yield user_model_1.default.create(payload);
    const jwtPayload = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        email: payload.email,
        role: user_interface_1.UserRole.USER,
    };
    const accessToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, { expiresIn: "1d" });
    return {
        accessToken,
    };
});
const getAllUser = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.default.find();
    return result;
});
exports.UserServices = {
    registerUser,
    getAllUser,
};
