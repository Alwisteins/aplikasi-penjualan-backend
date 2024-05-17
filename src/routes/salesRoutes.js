import express from "express";
import salesController from "../controller/salesController";

const router = express.Router();

router.post("/", salesController.createSale);
router.put("/:id", salesController.updateSaleById);
router.get("/", salesController.getAllSales);

export default router;
