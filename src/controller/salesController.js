import salesModel from "../model/salesModel";
import { ClientError } from "../utils/error";

const createSale = async (req, res, next) => {
  try {
    const { item, stock, sold, transaction_date, type } = req.body;

    if (!item || !stock || !sold || !type) {
      throw new ClientError(
        "Masih ada data yang kosong, harap cantumkan data dengan lengkap.",
        403,
      );
    }

    const newSale = { item, stock, sold, transaction_date, type };
    await salesModel.createSale(newSale);

    return res
      .status(200)
      .json({ message: "Berhasil menambahkan data penjualan" });
  } catch (error) {
    next(error);
  }
};

const getAllSales = async (req, res, next) => {
  try {
    const sales = await salesModel.getAllSales();

    if (!sales.length) {
      throw new ClientError("Tidak ada data penjualan untuk ditampilkan", 404);
    }

    return res
      .status(200)
      .json({ message: "Berhasil mengambil data penjualan", sales });
  } catch (error) {
    next(error);
  }
};

const salesController = { createSale, getAllSales };

export default salesController;
