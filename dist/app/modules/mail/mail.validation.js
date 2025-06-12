"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mailValidations = void 0;
const zod_1 = require("zod");
exports.mailValidations = zod_1.z.object({
    body: zod_1.z.object({
        fullName: zod_1.z
            .string({ invalid_type_error: "Full name must be a string" })
            .min(1, { message: "Full name is required" }),
        email: zod_1.z
            .string({
            required_error: "Email is require",
            invalid_type_error: "Email must be a string",
        })
            .email({ message: "Email is not valid" }),
        dateOfBirth: zod_1.z
            .string({ invalid_type_error: "Date of birth must be a string" })
            .optional(),
        placeOfBirth: zod_1.z
            .string({
            invalid_type_error: "Place of birth must be a string",
        })
            .optional(),
        whatToLearn: zod_1.z
            .string({
            invalid_type_error: "What to learn must be a string",
        })
            .optional(),
        likeToFocus: zod_1.z
            .string({
            invalid_type_error: "Like to focus must be a string",
        })
            .optional(),
        whatToLearnDetails: zod_1.z
            .string({
            invalid_type_error: "What to learn details must be a string",
        })
            .optional(),
        hopeToLearn: zod_1.z
            .string({
            invalid_type_error: "Hope to learn must be a string",
        })
            .optional(),
        dateRanges: zod_1.z
            .string({
            invalid_type_error: "Date ranges must be a string",
        })
            .optional(),
    }),
});
