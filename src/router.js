import { Router } from "express";
import { createpdf } from "./controllers/pdf.js";

const router = Router();

router.post("/api/createpdf", createpdf);

export default router