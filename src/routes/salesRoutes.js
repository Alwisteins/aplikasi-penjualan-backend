import express from "express";
import salesController from "../controller/salesController";

const router = express.Router();

router.post("/", salesController.createSale);
router.put("/:id", salesController.updateSaleById);
router.delete("/:id", salesController.deleteSaleById);
router.get("/", salesController.getAllSales);
router.get("/", salesController.getSalesByName);

export default router;
