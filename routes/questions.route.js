import express from "express";
import { receiveQuestiosn } from "../controllers/questions.js"
const router = express.Router();

/* GET home page. */
router.post("/questions", receiveQuestiosn);

export default router