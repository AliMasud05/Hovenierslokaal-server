import { Model } from "mongoose";

export type TMedia = {
  mediaTitle: string;
  date: Date;
  videoLink: string;
  description: string;
};

export interface MediaModel extends Model<TMedia> {
  isMediaExists(mediaId: string): Promise<TMedia>;
}
