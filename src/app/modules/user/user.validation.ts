import { z } from "zod";
import { UserRole } from "./user.interface";

const createUserValidationSchema = z.object({
  body: z.object({
    firstName: z
      .string({ invalid_type_error: "First name must be a string" })
      .min(1, "First name is required"),
    lastName: z
      .string({ invalid_type_error: "Last name must be a string" })
      .min(1, "Last name is required"),
    email: z
      .string({ required_error: "Email is require" })
      .email("Invalid email address"),
    password: z
      .string({ required_error: "Password is required" })
      .min(6, "Password must be at least 6 characters long")
      .max(20, "Password can not be more than 20 characters long"),
    role: z.enum([UserRole.USER, UserRole.ADMIN]).default(UserRole.USER),
  }),
});

const updateUserValidationSchema = z.object({
  body: z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    email: z
      .string({ required_error: "Email is require" })
      .email("Invalid email address"),
    role: z.enum([UserRole.USER, UserRole.ADMIN]).default(UserRole.USER),
  }),
});

export const UserValidation = {
  createUserValidationSchema,
  updateUserValidationSchema,
};
