import { UserRole } from "../user/user.interface";

export type TAuth = {
  email: string;
  password: string; // Optional user agent string
};

export type TJwtPayload = {
  firstName: string;
  lastName: string;
  email: string;
  role: UserRole;
};
