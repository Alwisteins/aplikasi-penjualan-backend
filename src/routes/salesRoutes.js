import express from "express";
import salesController from "../controller/salesController";

const router = express.Router();

router.post("/", salesController.createSale);
router.get("/", salesController.getAllSales);

export default router;
