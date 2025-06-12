"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const upload_1 = require("../../utils/upload");
const gallery_validation_1 = require("./gallery.validation");
const gallery_controller_1 = require("./gallery.controller");
const router = (0, express_1.Router)();
router.post("/create-gallery", upload_1.upload.array("file", 20), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(gallery_validation_1.GalleryValidations.createGalleryValidationSchema), gallery_controller_1.GalleryController.createGallery);
router.get("/", gallery_controller_1.GalleryController.getAllGallery);
router.patch("/:galleryId", upload_1.upload.array("file", 20), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(gallery_validation_1.GalleryValidations.updateGalleryValidationSchema), gallery_controller_1.GalleryController.updateGallery);
router.delete("/:galleryId", gallery_controller_1.GalleryController.deleteGallery);
exports.GalleryRoutes = router;
