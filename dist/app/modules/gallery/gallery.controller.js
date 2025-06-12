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
exports.GalleryController = void 0;
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const gallery_service_1 = require("./gallery.service");
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const createGallery = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.files && Array.isArray(req.files)) {
        req.body.photo = req.files.map((file) => `/uploads/${file.filename}`);
    }
    else {
        req.body.photo = [];
    }
    const result = yield gallery_service_1.GalleryService.createGalleryIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        message: "Gallery is created successfully!",
        data: result,
    });
}));
const getAllGallery = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield gallery_service_1.GalleryService.getAllGalleryFromDB(req.query);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Gallery retrieved successfully!",
        meta: result.meta,
        data: result.result,
    });
}));
const updateGallery = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { galleryId } = req.params;
    if (req.files && Array.isArray(req.files)) {
        req.body.photo = req.files.map((file) => `/uploads/${file.filename}`);
    }
    const result = yield gallery_service_1.GalleryService.updateGalleryIntoDB(galleryId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Gallery updated successfully!",
        data: result,
    });
}));
const deleteGallery = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { galleryId } = req.params;
    yield gallery_service_1.GalleryService.deleteGalleryFromDB(galleryId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        message: "Gallery deleted successfully!",
        data: null,
    });
}));
exports.GalleryController = {
    createGallery,
    getAllGallery,
    updateGallery,
    deleteGallery,
};
