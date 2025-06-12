"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaValidations = void 0;
const zod_1 = require("zod");
const createMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        mediaTitle: zod_1.z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        date: zod_1.z.string({
            required_error: "Date is required",
        }),
        videoLink: zod_1.z.string({
            required_error: "video Link is required",
            invalid_type_error: "video Link must be a string",
        }),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
    }),
});
const updateMediaValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        mediaTitle: zod_1.z
            .string({
            invalid_type_error: "Title must be a string",
        })
            .optional(),
        date: zod_1.z
            .string({
            invalid_type_error: "Date must be in a date format",
        })
            .date()
            .optional(),
        videoLink: zod_1.z
            .string({
            invalid_type_error: "video Link must be a string",
        })
            .optional(),
        description: zod_1.z
            .string({
            invalid_type_error: "Description must be a string",
        })
            .optional(),
    }),
});
exports.MediaValidations = {
    createMediaValidationSchema,
    updateMediaValidationSchema,
};
