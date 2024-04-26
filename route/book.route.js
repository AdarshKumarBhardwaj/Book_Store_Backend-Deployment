import express from "express";
import { getBook } from "../controller/book.Controller.js";

const router = express.Router();
router.get("/", getBook);

export default router;
