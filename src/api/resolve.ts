import express from "express";

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";
import {
  GetResolveParams,
  GetResolveResponse,
  PostResolveBody,
  PostResolveParams,
  PostResolveResponse,
} from "../types/resolve.types";

const router = express.Router();

router.get<GetResolveParams, MessageResponse<GetResolveResponse>>(
  "/:uid",
  (req, res) => {
    const { uid } = req.params;

    res.json({
      message: "API - Resolve 👋🌎🌍🌏",
      data: {
        uid,
        originalUrl: "",
        type: "image",
        passwordRequired: false,
        prompt: "",
        expireIn: 86400000,
        expireAt: "",
        createdAt: "",
        updatedAt: "",
      },
      code: StatusCode.SUCCESS,
    });
  }
);

router.post<
  PostResolveParams,
  MessageResponse<PostResolveResponse>,
  PostResolveBody
>("/:uid", (req, res) => {
  const { uid } = req.params;
  const { password } = req.body;
  res.json({
    message: "API - Resolve 👋🌎🌍🌏",
    data: {
      uid: `${uid}_${password}`,
      originalUrl: "",
      type: "image",
      passwordRequired: false,
      prompt: "",
      expireIn: 86400000,
      expireAt: "",
      createdAt: "",
      updatedAt: "",
    },
    code: StatusCode.SUCCESS,
  });
});

export default router;
