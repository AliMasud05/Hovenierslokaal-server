import { NextFunction, Request, Response, Router } from "express";
import validateRequest from "../../middleware/validateRequest";
import { upload } from "../../utils/upload";
import { GalleryValidations } from "./gallery.validation";
import { GalleryController } from "./gallery.controller";

const router = Router();

router.post(
  "/create-gallery",
  upload.array("file", 20),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(GalleryValidations.createGalleryValidationSchema),
  GalleryController.createGallery
);

router.get("/", GalleryController.getAllGallery);

router.patch(
  "/:galleryId",
  upload.array("file", 20),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    next();
  },
  validateRequest(GalleryValidations.updateGalleryValidationSchema),
  GalleryController.updateGallery
);

router.delete("/:galleryId", GalleryController.deleteGallery);

export const GalleryRoutes = router;
