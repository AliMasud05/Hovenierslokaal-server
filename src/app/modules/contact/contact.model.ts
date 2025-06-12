import { model, Schema } from "mongoose";
import { ContactModel, TContact } from "./contact.interface";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";

const contactSchema = new Schema<TContact, ContactModel>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

contactSchema.statics.isContactExists = async function (userId: string) {
  const existingContact = await this.findById(userId);

  if (!existingContact) {
    throw new AppError(StatusCodes.NOT_FOUND, "Contact does not exist!");
  }

  return existingContact;
};

export const Contact = model<TContact, ContactModel>("Contact", contactSchema);
