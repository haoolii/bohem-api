import express from "express";

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";
import emojis from "./emojis";
import shorten from "./shorten";
import resolve from "./resolve";
import upload from "./upload";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
    data: {},
    code: StatusCode.SUCCESS,
  });
});

router.use("/emojis", emojis);
router.use("/shorten", shorten);
router.use("/resolve", resolve);
router.use("/upload", upload);

export default router;
