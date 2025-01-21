import express from "express";

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";
import { PostShortenBody } from "../types/shorten.types";
import PosyShortenBodySchema from "../schema/PosyShortenBodySchema";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - Shorten 👋🌎🌍🌏",
    data: {},
    code: StatusCode.SUCCESS,
  });
});

router.post<{}, MessageResponse, PostShortenBody>("/", (req, res) => {
  const parseResult = PosyShortenBodySchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      code: StatusCode.ERROR,
      data: parseResult.error.errors,
      message: "Invalid Input",
    });
  }

  return res.json({
    code: StatusCode.SUCCESS,
    data: parseResult,
    message: "Success",
  });
});

export default router;
