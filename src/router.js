import { Router } from "express";
import { createpdf , downloadPDF } from "./controllers/pdf.js";

const router = Router();

router.post("/api/createpdf", createpdf);
router.post("/api/downloadpdf",downloadPDF);
router.post("/api/file", () => {
    console.log("request for file come");
    
});




export default router