import { Request, Response } from "express";
import { classifyNumberService } from "../services/classifyNumberService";

// Controller to classify a number
export async function classifyNumberController(req: Request, res: Response): Promise<void> {
    const { number } = req.query;
    
    const num = Number(number);
    if (isNaN(num) || !Number.isInteger(num)) {
        res.status(400).json({ number, error: true });
        return;
    }

    try {
        const result = await classifyNumberService(num);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: (error as Error).message });
    }
}
