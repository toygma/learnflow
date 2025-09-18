import { z } from "zod";

export const courseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const courseStatus = ["Draft", "Published", "Archived"] as const;

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters long" })
    .max(100, { message: "Title must be at most 100 characters long" }),

  description: z
    .string()
    .min(10, { message: "Description must be at least 10 characters long" })
    .max(500, { message: "Description must be at most 500 characters long" }),

  smallDescription: z
    .string()
    .min(3, { message: "Short description must be at least 3 characters long" })
    .max(200, {
      message: "Short description must be at most 200 characters long",
    }),

  fileKey: z.string().min(1, { message: "File key is required" }),

  price: z.number().min(1, { message: "Price must be at least 1" }),

  duration: z
    .number()
    .min(1, { message: "Duration must be at least 1 hour" })
    .max(500, { message: "Duration cannot exceed 500 hours" }),

  level: z.enum(courseLevels, { message: "Level is required" }),

  category: z.string().min(1, { message: "Category is required" }),

  slug: z
    .string()
    .min(3, { message: "Slug must be at least 3 characters long" })
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
      message: "Slug must be lowercase, alphanumeric, and can contain hyphens",
    }),

  status: z.enum(courseStatus).optional(),
});
export type CourseSchemaType = z.infer<typeof courseSchema>;
