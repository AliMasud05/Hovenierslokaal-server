import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ContactService } from "./contact.service";

const createContact = catchAsync(async (req, res) => {
  if (req.file) {
    req.body.photo = `/uploads/${req.file.filename}`;
  }

  const result = await ContactService.createContactIntoDB(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.CREATED,
    message: "Contact is created successfully!",
    data: result,
  });
});

const getAllContacts = catchAsync(async (req, res) => {
  const result = await ContactService.getAllContactsFromDB(req.query);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Contacts are retrieved successfully!",
    data: result.result,
    meta: result.meta,
  });
});

const updateContact = catchAsync(async (req, res) => {
  const { contactId } = req.params;

  if (req.file) {
    req.body.photo = `/uploads/${req.file.filename}`;
  }

  const result = await ContactService.updateContactIntoDB(contactId, req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Contact is updated successfully!",
    data: result,
  });
});

const deleteContact = catchAsync(async (req, res) => {
  const { contactId } = req.params;

  const result = await ContactService.deleteContactFromDB(contactId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Contact is deleted successfully!",
    data: result,
  });
});

export const ContactController = {
  createContact,
  getAllContacts,
  updateContact,
  deleteContact,
};
