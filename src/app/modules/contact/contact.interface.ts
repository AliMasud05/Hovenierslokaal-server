import { Model } from "mongoose";

export type TContact = {
  title: string;
  description: string;
  photo?: string;
};

export interface ContactModel extends Model<TContact> {
  isContactExists(contactId: string): Promise<TContact>;
}
