import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { MailController } from "./mail.controller";
import { mailValidations } from "./mail.validation";

const router = Router();

router.post(
  "/send-mail",
  MailController.sendMail
);
router.get(
  "/send-mail",
  MailController.test
);

export const MailRoutes = router;
