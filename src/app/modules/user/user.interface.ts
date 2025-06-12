import { Model } from "mongoose";
import { USER_ROLE } from "./user.const";

// Enum for User Roles
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
}

// User Schema Definition
export type TUser = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: UserRole;
};

export interface UserModel extends Model<TUser> {
  //instance methods for checking if passwords are matched
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string
  ): Promise<boolean>;
  isUserExistsByEmail(id: string): Promise<TUser>;
  checkUserExist(userId: string): Promise<TUser>;
}

export type TUserRole = keyof typeof USER_ROLE;
