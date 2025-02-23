import express from "express";

import { api } from "../api";
import { chatBot } from "../api/chatbot";

const router = express.Router();

router.get("/", api);

router.post("/chat", chatBot);

export default router;
