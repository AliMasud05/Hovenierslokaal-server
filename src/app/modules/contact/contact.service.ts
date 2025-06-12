import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";
import QueryBuilder from "../../builder/QueryBuilder";

const createContactIntoDB = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

const getAllContactsFromDB = async (query: Record<string, unknown>) => {
  const contactQuery = new QueryBuilder(Contact.find(), query).paginate();

  const meta = await contactQuery.countTotal();
  const result = await contactQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const updateContactIntoDB = async (
  contactId: string,
  updatedData: Partial<TContact>
) => {
  const contact = await Contact.isContactExists(contactId);

  if (
    contact?.photo &&
    contact?.photo.length > 0 &&
    updatedData?.photo?.length == 0
  ) {
    updatedData.photo = contact.photo;
  }

  const result = await Contact.findByIdAndUpdate(contactId, updatedData, {
    new: true,
  });
  return result;
};

const deleteContactFromDB = async (contactId: string) => {
  const contact = await Contact.isContactExists(contactId);

  if (!contact) {
    throw new AppError(StatusCodes.NOT_FOUND, "Contact does not exist!");
  }

  await Contact.findByIdAndDelete(contactId);
  return null;
};

export const ContactService = {
  createContactIntoDB,
  getAllContactsFromDB,
  updateContactIntoDB,
  deleteContactFromDB,
};
