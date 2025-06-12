import { model, Schema } from "mongoose";
import { MediaModel, TMedia } from "./media.interface";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";

const mediaSchema = new Schema<TMedia, MediaModel>({
  mediaTitle: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

mediaSchema.statics.isMediaExists = async function (mediaId: string) {
  const existingMedia = await this.findById(mediaId);

  if (!existingMedia) {
    throw new AppError(StatusCodes.NOT_FOUND, "Media does not exist!");
  }

  return existingMedia;
};

export const Media = model<TMedia, MediaModel>("Media", mediaSchema);
