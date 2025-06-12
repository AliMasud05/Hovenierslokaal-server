import { z } from "zod";

const createGalleryValidationSchema = z.object({
  body: z.object({
    galleryTitle: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    }),
    date: z.string(),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
    photo: z
      .string({ invalid_type_error: "Photo must be a string" })
      .optional(),
  }),
});

const updateGalleryValidationSchema = z.object({
  body: z.object({
    galleryTitle: z
      .string({
        invalid_type_error: "Title must be a string",
      })
      .optional(),
    date: z.string().optional(),
    description: z
      .string({
        invalid_type_error: "Description must be a string",
      })
      .optional(),
    photo: z.string().optional(),
  }),
});

export const GalleryValidations = {
  createGalleryValidationSchema,
  updateGalleryValidationSchema,
};
