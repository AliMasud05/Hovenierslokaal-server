"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GalleryValidations = void 0;
const zod_1 = require("zod");
const createGalleryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        galleryTitle: zod_1.z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),
        date: zod_1.z.string(),
        description: zod_1.z.string({
            required_error: "Description is required",
            invalid_type_error: "Description must be a string",
        }),
        photo: zod_1.z
            .string({ invalid_type_error: "Photo must be a string" })
            .optional(),
    }),
});
const updateGalleryValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        galleryTitle: zod_1.z
            .string({
            invalid_type_error: "Title must be a string",
        })
            .optional(),
        date: zod_1.z.string().optional(),
        description: zod_1.z
            .string({
            invalid_type_error: "Description must be a string",
        })
            .optional(),
        photo: zod_1.z.string().optional(),
    }),
});
exports.GalleryValidations = {
    createGalleryValidationSchema,
    updateGalleryValidationSchema,
};
