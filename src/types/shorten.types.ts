export type PostShortenBody = {
    original: string; // could be filename or url
    type: "image" | "video" | "url",
    passwordRequired: boolean;
    password: string;
    prompt: string;
    expireIn: number;
};
