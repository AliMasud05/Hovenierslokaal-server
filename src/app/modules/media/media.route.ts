import { Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { MediaController } from "./media.controller";
import { MediaValidations } from "./media.validation";

const router = Router();

router.post(
  "/create-media",
  validateRequest(MediaValidations.createMediaValidationSchema),
  MediaController.createMedia
);

router.get("/", MediaController.getAllMedia);

router.patch("/:mediaId", MediaController.updateMedia);

router.delete("/:mediaId", MediaController.deleteMedia);

export const MediaRoutes = router;
