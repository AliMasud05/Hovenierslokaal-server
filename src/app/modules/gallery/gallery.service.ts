import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { TGallery } from "./gallery.interface";
import { Gallery } from "./gallery.model";
import QueryBuilder from "../../builder/QueryBuilder";

const createGalleryIntoDB = async (payload: TGallery) => {
  const result = await Gallery.create(payload);
  return result;
};

const getAllGalleryFromDB = async (query: Record<string, unknown>) => {
  const galleryQuery = new QueryBuilder(Gallery.find(), query).paginate();

  const meta = await galleryQuery.countTotal();
  const result = await galleryQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const updateGalleryIntoDB = async (
  galleryId: string,
  payload: Partial<TGallery>
) => {
  const gallery = await Gallery.isGalleryExists(galleryId);

  if (!gallery) {
    throw new AppError(StatusCodes.NOT_FOUND, "Gallery not found");
  }
  
  if (
    gallery?.photo &&
    gallery?.photo.length > 0 &&
    payload?.photo?.length == 0
  ) {
    payload.photo = gallery.photo;
  }

  const result = await Gallery.findByIdAndUpdate(galleryId, payload, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deleteGalleryFromDB = async (galleryId: string) => {
  const gallery = await Gallery.isGalleryExists(galleryId);

  if (!gallery) {
    throw new AppError(StatusCodes.NOT_FOUND, "Gallery not found!");
  }

  await Gallery.findByIdAndDelete(galleryId);
  return null;
};

export const GalleryService = {
  createGalleryIntoDB,
  getAllGalleryFromDB,
  updateGalleryIntoDB,
  deleteGalleryFromDB,
};
