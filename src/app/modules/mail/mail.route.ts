import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { MailController } from "./mail.controller";
import { mailValidations } from "./mail.validation";

const router = Router();

router.post(
  "/send-mail",
  MailController.sendMail
);

export const MailRoutes = router;
