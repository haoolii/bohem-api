import { z } from "zod";

export const PostShortenBodySchema = z.object({
    original: z.string(),
    prompt: z.string().optional(),
    password: z.string().optional(),
    passwordRequired: z.boolean(),
    type: z.enum(["image", "video", "url"]),
    expireIn: z.number().int().positive(),
});