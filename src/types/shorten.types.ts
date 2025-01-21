export type PostShortenBody = {
    originalUrl: string;
    type: "image" | "video" | "url",
    passwordRequired: boolean;
    password: string;
    prompt: string;
    expireIn: number;
};
