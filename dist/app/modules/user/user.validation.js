"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const user_interface_1 = require("./user.interface");
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z
            .string({ invalid_type_error: "First name must be a string" })
            .min(1, "First name is required"),
        lastName: zod_1.z
            .string({ invalid_type_error: "Last name must be a string" })
            .min(1, "Last name is required"),
        email: zod_1.z
            .string({ required_error: "Email is require" })
            .email("Invalid email address"),
        password: zod_1.z
            .string({ required_error: "Password is required" })
            .min(6, "Password must be at least 6 characters long")
            .max(20, "Password can not be more than 20 characters long"),
        role: zod_1.z.enum([user_interface_1.UserRole.USER, user_interface_1.UserRole.ADMIN]).default(user_interface_1.UserRole.USER),
    }),
});
const updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        firstName: zod_1.z.string().optional(),
        lastName: zod_1.z.string().optional(),
        email: zod_1.z
            .string({ required_error: "Email is require" })
            .email("Invalid email address"),
        role: zod_1.z.enum([user_interface_1.UserRole.USER, user_interface_1.UserRole.ADMIN]).default(user_interface_1.UserRole.USER),
    }),
});
exports.UserValidation = {
    createUserValidationSchema,
    updateUserValidationSchema,
};
