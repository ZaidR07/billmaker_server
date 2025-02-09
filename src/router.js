import { Router } from "express";
import { createpdf , downloadPDF } from "./controllers/pdf.js";

const router = Router();

router.post("/api/createpdf", createpdf);
router.post("/api/downloadpdf",downloadPDF);
router.post("/api/file", ( req , res) => {
    return res.status(200).json({
        message : "Done"
    })
    
});




export default router