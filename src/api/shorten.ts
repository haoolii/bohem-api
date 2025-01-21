import express from "express";
import dayjs from "dayjs";

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";
import { PostShortenBodySchema } from "../schema/shorten.schema";
import { PostShortenBody } from "../types/shorten.types";

import db from "../core/db";
import { generateUniqueId } from "../core/core";

const router = express.Router();

router.post<{}, MessageResponse, PostShortenBody>("/", async (req, res) => {
  const parseResult = PostShortenBodySchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.json({
      code: StatusCode.ERROR,
      data: null,
      message: "Invalid Input",
      error: parseResult.error.errors
    });
  }

  const uniqueId = await generateUniqueId()

  const { original, prompt, password, passwordRequired, type, expireIn } = parseResult.data;

  const record = await db.record.create({
    data: {
      uniqueId,
      original,
      prompt,
      password,
      passwordRequired,
      type,
      expireIn,
      expireAt: expireIn ? dayjs().add(expireIn, 'millisecond').toISOString() : null,
    }
  })

  return res.json({
    code: StatusCode.SUCCESS,
    data: {
      uniqueId: record.uniqueId,
      original: record.original,
      prompt: record.prompt,
      passwordRequired: record.passwordRequired,
      type: record.type,
      expireIn: record.expireIn,
      expireAt: record.expireAt,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt
    },
    message: "Success",
  });
});

export default router;
