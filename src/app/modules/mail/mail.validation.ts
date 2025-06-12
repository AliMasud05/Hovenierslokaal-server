import { z } from "zod";

export const mailValidations = z.object({
  body: z.object({
    fullName: z
      .string({ invalid_type_error: "Full name must be a string" })
      .min(1, { message: "Full name is required" }),
    email: z
      .string({
        required_error: "Email is require",
        invalid_type_error: "Email must be a string",
      })
      .email({ message: "Email is not valid" }),
    dateOfBirth: z
      .string({ invalid_type_error: "Date of birth must be a string" })
      .optional(),
    placeOfBirth: z
      .string({
        invalid_type_error: "Place of birth must be a string",
      })
      .optional(),
    whatToLearn: z
      .string({
        invalid_type_error: "What to learn must be a string",
      })
      .optional(),
    likeToFocus: z
      .string({
        invalid_type_error: "Like to focus must be a string",
      })
      .optional(),
    whatToLearnDetails: z
      .string({
        invalid_type_error: "What to learn details must be a string",
      })
      .optional(),
    hopeToLearn: z
      .string({
        invalid_type_error: "Hope to learn must be a string",
      })
      .optional(),
    dateRanges: z
      .string({
        invalid_type_error: "Date ranges must be a string",
      })
      .optional(),
  }),
});
