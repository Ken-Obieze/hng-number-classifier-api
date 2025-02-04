import { Router } from "express";
import { classifyNumberController } from "../controllers/classifyNumberController";

const router = Router();

// Route to classify a number
router.get("/classify-number", classifyNumberController);

export default router;
