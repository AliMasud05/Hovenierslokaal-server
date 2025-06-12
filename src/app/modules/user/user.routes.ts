import { Router } from "express";
import { UserController } from "./user.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserValidation } from "./user.validation";
import auth from "../../middleware/auth";
import { UserRole } from "./user.interface";

const router = Router();

router.get("/", auth(UserRole.ADMIN), UserController.getAllUser);

router.post(
  "/register",
  validateRequest(UserValidation.createUserValidationSchema),
  UserController.registerUser
);

export const UserRoutes = router;
