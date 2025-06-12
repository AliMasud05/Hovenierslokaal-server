"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const mail_controller_1 = require("./mail.controller");
const mail_validation_1 = require("./mail.validation");
const router = (0, express_1.Router)();
router.post("/send-mail", (0, validateRequest_1.default)(mail_validation_1.mailValidations), mail_controller_1.MailController.sendMail);
exports.MailRoutes = router;
