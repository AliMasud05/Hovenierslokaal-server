"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const contact_controller_1 = require("./contact.controller");
const contact_validation_1 = require("./contact.validation");
const upload_1 = require("../../utils/upload"); // Import the upload middleware
const router = (0, express_1.Router)();
router.post("/create-contact", upload_1.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(contact_validation_1.ContactValidations.createContactValidationSchema), contact_controller_1.ContactController.createContact);
router.get("/", contact_controller_1.ContactController.getAllContacts);
router.patch("/:contactId", upload_1.upload.single("file"), (req, res, next) => {
    req.body = JSON.parse(req.body.data);
    next();
}, (0, validateRequest_1.default)(contact_validation_1.ContactValidations.updateContactValidationSchema), contact_controller_1.ContactController.updateContact);
router.delete("/:contactId", contact_controller_1.ContactController.deleteContact);
exports.ContactRoutes = router;
