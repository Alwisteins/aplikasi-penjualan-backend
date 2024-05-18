import express from "express";
import salesController from "../controller/salesController";

const router = express.Router();

router.post("/", salesController.createSale);
router.put("/:id", salesController.updateSaleById);
router.delete("/:id", salesController.deleteSaleById);
router.get("/", salesController.getAllSales);
router.get("/search", salesController.searchSalesByName);
router.get("/filter/name", salesController.getSalesSortedByName);
router.get("/filter/date", salesController.getSalesSortedByDate);

router.get("/sales/type/:type", salesController.getSalesByTypeAndSortBySold);

export default router;
