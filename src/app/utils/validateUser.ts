import { StatusCodes } from "http-status-codes";
import AppError from "../errors/appError";
import User from "../modules/user/user.model";

export const validateUser = async (email: string) => {
  const user = await User.isUserExistsByEmail(email);

  // Checking if the user exists
  if (!user) {
    throw new AppError(StatusCodes.NOT_FOUND, "User not found!");
  }

  return user;
};
