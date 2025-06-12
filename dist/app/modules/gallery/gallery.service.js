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
exports.GalleryService = void 0;
const http_status_codes_1 = require("http-status-codes");
const appError_1 = __importDefault(require("../../errors/appError"));
const gallery_model_1 = require("./gallery.model");
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const createGalleryIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_model_1.Gallery.create(payload);
    return result;
});
const getAllGalleryFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const galleryQuery = new QueryBuilder_1.default(gallery_model_1.Gallery.find(), query).paginate();
    const meta = yield galleryQuery.countTotal();
    const result = yield galleryQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const updateGalleryIntoDB = (galleryId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const gallery = yield gallery_model_1.Gallery.isGalleryExists(galleryId);
    if (!gallery) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Gallery not found");
    }
    if ((gallery === null || gallery === void 0 ? void 0 : gallery.photo) &&
        (gallery === null || gallery === void 0 ? void 0 : gallery.photo.length) > 0 &&
        ((_a = payload === null || payload === void 0 ? void 0 : payload.photo) === null || _a === void 0 ? void 0 : _a.length) == 0) {
        payload.photo = gallery.photo;
    }
    const result = yield gallery_model_1.Gallery.findByIdAndUpdate(galleryId, payload, {
        new: true,
        runValidators: true,
    });
    return result;
});
const deleteGalleryFromDB = (galleryId) => __awaiter(void 0, void 0, void 0, function* () {
    const gallery = yield gallery_model_1.Gallery.isGalleryExists(galleryId);
    if (!gallery) {
        throw new appError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Gallery not found!");
    }
    yield gallery_model_1.Gallery.findByIdAndDelete(galleryId);
    return null;
});
exports.GalleryService = {
    createGalleryIntoDB,
    getAllGalleryFromDB,
    updateGalleryIntoDB,
    deleteGalleryFromDB,
};
