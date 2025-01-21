import express from "express";

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";
import {
  GetResolveParams,
  GetResolveResponse,
  PostResolveBody,
  PostResolveParams,
  PostResolveResponse,
} from "../types/resolve.types";

import db from "../core/db";

const router = express.Router();

router.get<GetResolveParams, MessageResponse<GetResolveResponse>>(
  "/:uniqueId",
  async (req, res) => {
    const { uniqueId } = req.params;

    const record = await db.record.findFirst({
      where: {
        uniqueId
      }
    })

    if (!record) {
      return res.json({
        message: "Record not found",
        code: StatusCode.ERROR,
        data: null,
      })
    }

    if (record.passwordRequired) {
      return res.json({
        code: StatusCode.SUCCESS,
        message: "success",
        data: {
          uniqueId: record.uniqueId,
          type: record.type,
          passwordRequired: record.passwordRequired,
          prompt: record.prompt,
          expireIn: record.expireIn,
          expireAt: record.expireAt.toISOString(),
          createdAt: record.createdAt.toISOString(),
          updatedAt: record.updatedAt.toISOString()
        }
      })
    }

    return res.json({
      code: StatusCode.SUCCESS,
      message: "success",
      data: {
        uniqueId: record.uniqueId,
        original: record.original,
        type: record.type,
        passwordRequired: record.passwordRequired,
        prompt: record.prompt,
        expireIn: record.expireIn,
        expireAt: record.expireAt.toISOString(),
        createdAt: record.createdAt.toISOString(),
        updatedAt: record.updatedAt.toISOString()
      }
    })
  });

router.post<
  PostResolveParams,
  MessageResponse<PostResolveResponse>,
  PostResolveBody
>("/:uniqueId", async (req, res) => {
  const { uniqueId } = req.params;
  const { password } = req.body;

  const record = await db.record.findFirst({
    where: {
      uniqueId
    }
  })

  if (!record) {
    return res.json({
      message: "record not found",
      code: StatusCode.ERROR,
      data: null,
    })
  }

  
  if (record.passwordRequired && record.password !== password) {
    return res.json({
      message: "password wrong",
      code: StatusCode.ERROR,
      data: null,
    })
  }

  return res.json({
    code: StatusCode.SUCCESS,
    message: "success",
    data: {
      uniqueId: record.uniqueId,
      original: record.original,
      type: record.type,
      passwordRequired: record.passwordRequired,
      prompt: record.prompt,
      expireIn: record.expireIn,
      expireAt: record.expireAt.toISOString(),
      createdAt: record.createdAt.toISOString(),
      updatedAt: record.updatedAt.toISOString()
    }
  })
});

export default router;
