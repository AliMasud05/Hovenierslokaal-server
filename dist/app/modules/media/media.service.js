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
exports.MediaService = void 0;
const http_status_codes_1 = require("http-status-codes");
const appError_1 = __importDefault(require("../../errors/appError"));
const media_model_1 = require("./media.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createMediaIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield media_model_1.Media.create(payload);
    return result;
});
const getAllMediaFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const mediaQuery = new QueryBuilder_1.default(media_model_1.Media.find(), query).paginate();
    const meta = yield mediaQuery.countTotal();
    const result = yield mediaQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const updateMediaIntoDB = (mediaId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const media = yield media_model_1.Media.isMediaExists(mediaId);
    if (!media) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Media not found");
    }
    const result = yield media_model_1.Media.findByIdAndUpdate(mediaId, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteMediaFromDB = (mediaId) => __awaiter(void 0, void 0, void 0, function* () {
    const media = yield media_model_1.Media.isMediaExists(mediaId);
    if (!media) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Media not found!");
    }
    yield media_model_1.Media.findByIdAndDelete(mediaId);
    return null;
});
exports.MediaService = {
    createMediaIntoDB,
    getAllMediaFromDB,
    updateMediaIntoDB,
    deleteMediaFromDB,
};
