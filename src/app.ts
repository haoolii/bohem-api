import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import fileUpload from 'express-fileupload';

import * as middlewares from "./middlewares";
import api from "./api";
import MessageResponse, { StatusCode } from "./interfaces/MessageResponse";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
  safeFileNames: true,
  preserveExtension: true
}));

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "🦄🌈✨👋🌎🌍🌏✨🌈🦄",
    data: "'🦄🌈✨👋🌎🌍🌏✨🌈🦄'",
    code: StatusCode.SUCCESS,
  });
});

app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
