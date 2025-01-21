import { z } from "zod";

export default z.object({
    originalUrl: z.string(),
    password: z.string(),
    email: z.string().email("請提供有效的電子郵件"),
    type: z.enum(["image", "video", "url"]),
    passwordRequired: z.boolean(),
    prompt: z.string().optional(),
    expireIn: z.number().int().positive(),
});