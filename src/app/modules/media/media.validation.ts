import { z } from "zod";

const createMediaValidationSchema = z.object({
  body: z.object({
    mediaTitle: z.string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    }),
    date: z.string({
      required_error: "Date is required",
    }),
    videoLink: z.string({
      required_error: "video Link is required",
      invalid_type_error: "video Link must be a string",
    }),
    description: z.string({
      required_error: "Description is required",
      invalid_type_error: "Description must be a string",
    }),
  }),
});

const updateMediaValidationSchema = z.object({
  body: z.object({
    mediaTitle: z
      .string({
        invalid_type_error: "Title must be a string",
      })
      .optional(),
    date: z
      .string({
        invalid_type_error: "Date must be in a date format",
      })
      .date()
      .optional(),
    videoLink: z
      .string({
        invalid_type_error: "video Link must be a string",
      })
      .optional(),
    description: z
      .string({
        invalid_type_error: "Description must be a string",
      })
      .optional(),
  }),
});

export const MediaValidations = {
  createMediaValidationSchema,
  updateMediaValidationSchema,
};
