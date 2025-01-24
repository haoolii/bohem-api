import { z } from "zod";

export const PostShortenBodySchema = z.object({
    original: z.string(),
    prompt: z.string().optional().nullable(),
    password: z.string().nullable(),
    passwordRequired: z.boolean(),
    type: z.enum(["image", "video", "url"]),
    expireIn: z.number().int().positive().nullable().optional(),
});