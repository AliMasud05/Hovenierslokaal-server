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
exports.Media = void 0;
const mongoose_1 = require("mongoose");
const appError_1 = __importDefault(require("../../errors/appError"));
const http_status_codes_1 = require("http-status-codes");
const mediaSchema = new mongoose_1.Schema({
    mediaTitle: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    videoLink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});
mediaSchema.statics.isMediaExists = function (mediaId) {
    return __awaiter(this, void 0, void 0, function* () {
        const existingMedia = yield this.findById(mediaId);
        if (!existingMedia) {
            throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Media does not exist!");
        }
        return existingMedia;
    });
};
exports.Media = (0, mongoose_1.model)("Media", mediaSchema);
