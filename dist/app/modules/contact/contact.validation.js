"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactValidations = void 0;
const zod_1 = require("zod");
const createContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        photo: zod_1.z
            .string({ invalid_type_error: "Photo must be a string" })
            .optional(),
    }),
});
const updateContactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z
            .string({
            invalid_type_error: "Title must be a string",
        })
            .optional(),
        description: zod_1.z
            .string({
            invalid_type_error: "Description must be a string",
        })
            .optional(),
        photo: zod_1.z
            .string({ invalid_type_error: "Photo must be a string" })
            .optional(),
    }),
});
exports.ContactValidations = {
    createContactValidationSchema,
    updateContactValidationSchema,
};
