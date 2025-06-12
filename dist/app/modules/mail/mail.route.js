"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailRoutes = void 0;
const express_1 = require("express");
const mail_controller_1 = require("./mail.controller");
const router = (0, express_1.Router)();
router.post("/send-mail", mail_controller_1.MailController.sendMail);
router.get("/send-mail", mail_controller_1.MailController.test);
exports.MailRoutes = router;
