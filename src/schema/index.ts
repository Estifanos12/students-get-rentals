import { z } from "zod";

export const registerSchema = z
  .object({
    fullname: z.string().min(1, {
      message: "Full name is required",
    }),
    email: z.string().email().min(1, {
      message: "Email is required",
    }),
    password: z.string().min(4, {
      message: "Password is required and must be at least 4 characters long",
    }),
    confirm_password: z.string().min(4, {
      message: "Confirm password is required",
    }),
    agree_terms: z.boolean().default(false),
  })
  .superRefine(({ confirm_password, password, agree_terms }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "Passwords do not match",
      });
    }
    if (agree_terms !== true) {
      ctx.addIssue({
        code: "custom",
        path: ["agree_terms"],
        message: "You must agree to the terms and conditions to continue",
      });
    }
  });

export const loginSchema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const enterEmailSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required",
    })
    .email(),
});

export const newPasswordSchema = z
  .object({
    password: z.string().min(4, {
      message: "Password must contain at least 4 characters long",
    }),
    confirm_password: z.string(),
  })
  .superRefine(({ confirm_password, password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "Passwords do not match",
      });
    }
  });

export const ContactFormSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
  message: z.string().min(1, {
    message: "Message is required",
  }),
});

export const createUserSchema = z.object({
  fullname: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(6),
});

export const ProfileSchema = z.discriminatedUnion("join", [
  z.object({
    join: z.literal("GROUP"),
    group_description: z.string(),
    no_of_students: z.string(),
    aprx_age: z.string(),
    LGBT_friendly: z.boolean().default(false),
    Pet_friendly: z.boolean().default(false),
    Student_friendly: z.boolean().default(false),
    Children_friendly: z.boolean().default(false),
    Elderly_friendly: z.boolean().default(false),
    Disabled_friendly: z.boolean().default(false),
  }),

  z.object({
    join: z.literal("SINGLE"),
    date: z.date(),
    job_title: z.string(),
    address: z.string(),
    description: z.string(),
    LGBT_friendly: z.boolean().default(false),
    Pet_friendly: z.boolean().default(false),
    Student_friendly: z.boolean().default(false),
    Children_friendly: z.boolean().default(false),
    Elderly_friendly: z.boolean().default(false),
    Disabled_friendly: z.boolean().default(false),
  }),

  z.object({
    join: z.literal("FULL_GROUP"),
    group_description: z.string(),
    no_of_students: z.string(),
    aprx_age: z.string(),
    LGBT_friendly: z.boolean().default(false),
    Pet_friendly: z.boolean().default(false),
    Student_friendly: z.boolean().default(false),
    Children_friendly: z.boolean().default(false),
    Elderly_friendly: z.boolean().default(false),
    Disabled_friendly: z.boolean().default(false),
  }),

  z.object({
    join: z.literal("NOT_RENTAL"),
  }),
]);

export const changePasswordSchema = z
  .object({
    old_password: z.string().min(1, {
      message: "Old password cannot be empty",
    }),
    new_password: z.string().min(4, {
      message: "Password is required and must be at least 4 characters long",
    }),
    confirm_password: z.string().min(4, {
      message: "Confirm password is required",
    }),
  })
  .superRefine(({ confirm_password, new_password }, ctx) => {
    if (new_password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        path: ["confirm_password"],
        message: "Passwords do not match",
      });
    }
  });
