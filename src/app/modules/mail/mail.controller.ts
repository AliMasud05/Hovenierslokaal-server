import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { MailService } from "./mail.service";

const sendMail = catchAsync(async (req: Request, res: Response) => {
  await MailService.sendMailToAdmin(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    message: "Email sent to admin successfully!",
    data: null,
  });
});

const test = catchAsync(async (req: Request, res: Response) => {
  res.send(
    `<div style="background: black; border-radius: 15px; width: 700px; height: 200px; margin: auto; margin-top: 50px; display: flex; flex-direction: column; justify-content: center; align-items: center;"><h1 style="color: white; text-align: center;">Welcome to the server of Art Jyotish!</h1></div>`
  );
});
export const MailController = {
  sendMail,
  test,
};
