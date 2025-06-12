import { StatusCodes } from "http-status-codes";
import AppError from "../../errors/appError";
import { sendEmail } from "../../utils/sendEmail";

const sendMailToAdmin = async (payload: any) => {
  try {
    await sendEmail(payload.email, payload);

    return null;
  } catch (err) {
    throw new AppError(StatusCodes.BAD_REQUEST, "Failed to send email");
  }
};

export const MailService = {
  sendMailToAdmin,
};
