export type GetResolveResponse = {
  uid: string;
  originalUrl?: string;
  type: "image" | "video" | "url";
  passwordRequired: boolean;
  prompt: string;
  expireIn: number;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
};

export type GetResolveParams = {
  uid: string;
};

export type PostResolveParams = {
  uid: string;
};

export type PostResolveBody = {
  password: string;
};

export type PostResolveResponse = {
  uid: string;
  originalUrl: string;
  type: "image" | "video" | "url";
  passwordRequired: boolean;
  prompt: string;
  expireIn: number;
  expireAt: string;
  createdAt: string;
  updatedAt: string;
};
