"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const media_controller_1 = require("./media.controller");
const media_validation_1 = require("./media.validation");
const router = (0, express_1.Router)();
router.post("/create-media", (0, validateRequest_1.default)(media_validation_1.MediaValidations.createMediaValidationSchema), media_controller_1.MediaController.createMedia);
router.get("/", media_controller_1.MediaController.getAllMedia);
router.patch("/:mediaId", media_controller_1.MediaController.updateMedia);
router.delete("/:mediaId", media_controller_1.MediaController.deleteMedia);
exports.MediaRoutes = router;
