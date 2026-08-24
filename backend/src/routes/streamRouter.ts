import { Router } from "express";
import { createStreamToken } from "../controllers/streamConrollers.js";

const router = Router();

router.post("/token", createStreamToken)

export default router;