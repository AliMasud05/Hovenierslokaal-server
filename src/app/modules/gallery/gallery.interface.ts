import { Model } from "mongoose";

export type TGallery = {
  galleryTitle: string;
  date: string;
  description: string;
  photo?: string[];
};

export interface GalleryModel extends Model<TGallery> {
  isGalleryExists(galleryId: string): Promise<TGallery>;
}
