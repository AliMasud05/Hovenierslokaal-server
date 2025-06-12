import { model, Schema } from "mongoose";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";
import { GalleryModel, TGallery } from "./gallery.interface";

const gallerySchema = new Schema<TGallery, GalleryModel>({
  galleryTitle: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  photo: {
    type: [String],
    optional: true,
  },
});

gallerySchema.statics.isGalleryExists = async function (galleryId: string) {
  const existingGallery = await this.findById(galleryId);

  if (!existingGallery) {
    throw new AppError(StatusCodes.NOT_FOUND, "Gallery does not exist!");
  }

  return existingGallery;
};

export const Gallery = model<TGallery, GalleryModel>("Gallery", gallerySchema);
