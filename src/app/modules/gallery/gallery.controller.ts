import { StatusCodes } from "http-status-codes";
import sendResponse from "../../utils/sendResponse";
import { GalleryService } from "./gallery.service";
import catchAsync from "../../utils/catchAsync";

const createGallery = catchAsync(async (req, res) => {
  if (req.files && Array.isArray(req.files)) {
    req.body.photo = (req.files as Express.Multer.File[]).map(
      (file) => `/uploads/${file.filename}`
    );
  } else {
    req.body.photo = [];
  }

  const result = await GalleryService.createGalleryIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Gallery is created successfully!",
    data: result,
  });
});

const getAllGallery = catchAsync(async (req, res) => {
  const result = await GalleryService.getAllGalleryFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Gallery retrieved successfully!",
    meta: result.meta,
    data: result.result,
  });
});

const updateGallery = catchAsync(async (req, res) => {
  const { galleryId } = req.params;

  if (req.files && Array.isArray(req.files)) {
    req.body.photo = (req.files as Express.Multer.File[]).map(
      (file) => `/uploads/${file.filename}`
    );
  }

  const result = await GalleryService.updateGalleryIntoDB(galleryId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Gallery updated successfully!",
    data: result,
  });
});

const deleteGallery = catchAsync(async (req, res) => {
  const { galleryId } = req.params;

  await GalleryService.deleteGalleryFromDB(galleryId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Gallery deleted successfully!",
    data: null,
  });
});

export const GalleryController = {
  createGallery,
  getAllGallery,
  updateGallery,
  deleteGallery,
};
