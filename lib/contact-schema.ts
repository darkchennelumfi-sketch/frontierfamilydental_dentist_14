import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name.")
    .max(100, "Please use 100 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .max(200, "Please use 200 characters or fewer.")
    .email("Please enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter your phone number.")
    .max(30, "Please use 30 characters or fewer.")
    .regex(/^[\d\s().+-]+$/, "Please use numbers and standard phone characters only."),
  comments: z
    .string()
    .trim()
    .max(2000, "Please use 2,000 characters or fewer.")
    .optional()
    .or(z.literal("")),
  validationComments: z
    .string()
    .max(0, "This field is for validation purposes and should be left unchanged.")
    .optional()
    .or(z.literal("")),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const contactDefaults: ContactValues = {
  name: "",
  email: "",
  phone: "",
  comments: "",
  validationComments: "",
};
