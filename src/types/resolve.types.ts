export type GetResolveResponse = {
  uniqueId: string;
  original?: string | null;
  type: string;
  passwordRequired: boolean;
  prompt: string | null;
  expireIn?: number | null;
  expireAt?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetResolveParams = {
  uniqueId: string;
};

export type PostResolveParams = {
  uniqueId: string;
};

export type PostResolveBody = {
  password: string;
};

export type PostResolveResponse = {
  uniqueId: string;
  original?: string | null;
  type: string;
  passwordRequired: boolean;
  prompt: string | null;
  expireIn?: number | null;
  expireAt?: string | null;
  createdAt: string;
  updatedAt: string;
};
