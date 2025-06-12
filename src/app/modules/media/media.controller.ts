import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MediaService } from "./media.service";

const createMedia = catchAsync(async (req, res) => {
  const result = await MediaService.createMediaIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Media is created successfully!",
    data: result,
  });
});

const getAllMedia = catchAsync(async (req, res) => {
  const result = await MediaService.getAllMediaFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Contacts are retrieved successfully!",
    data: result.result,
    meta: result.meta,
  });
});

const updateMedia = catchAsync(async (req, res) => {
  const { mediaId } = req.params;

  const result = await MediaService.updateMediaIntoDB(mediaId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Media is updated successfully!",
    data: result,
  });
});

const deleteMedia = catchAsync(async (req, res) => {
  const { mediaId } = req.params;

  await MediaService.deleteMediaFromDB(mediaId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Media is deleted successfully!",
    data: null,
  });
});

export const MediaController = {
  createMedia,
  getAllMedia,
  updateMedia,
  deleteMedia,
};
