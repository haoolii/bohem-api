import express from "express";
import { v4 as uuid } from 'uuid';
import path from 'path';
import fs from 'fs';

import MessageResponse, { StatusCode } from "../interfaces/MessageResponse";

const router = express.Router();

const UPLOAD_DIR = path.resolve('./uploads');

if (!fs.existsSync(UPLOAD_DIR)) {
    fs.mkdirSync(UPLOAD_DIR);
}

const allowedExtensions = ['.png', '.jpg', '.jpeg', '.gif'];

router.post<{}, MessageResponse>("/", async (req, res) => {
    let file = req.files?.file;

    if (!file) {
        return res.json({
            code: StatusCode.ERROR,
            message: "file is empty",
            data: null
        })
    }

    if (Array.isArray(file)) {
        return res.json({
            code: StatusCode.ERROR,
            message: "multiple upload not allowed",
            data: null
        })
    }

    /**
     * extension name
     */
    const ext = path.extname(file.name);


    /**
     * filter extension
     */
    if (!allowedExtensions.includes(ext)) {
        return res.json({
            code: StatusCode.ERROR,
            message: "file extension not allowed",
            data: {}
        })
    }


    /**
     * create uuid name
     */
    const filename = `${uuid()}${ext}`;


    /**
     * save file path
     */
    const savePath = path.join(UPLOAD_DIR, filename);


    /** 
     * write file
    */
    await file.mv(savePath);


    return res.json({
        code: StatusCode.SUCCESS,
        data: {
            filename
        },
        message: 'success'
    })

});

export default router;
