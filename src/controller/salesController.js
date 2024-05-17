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

const updateSaleById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { item, stock, sold, transaction_date, type } = req.body;

    if (!id) {
      throw new ClientError("Harap cantumkan id.", 403);
    }

    const data = { item, stock, sold, transaction_date, type };
    const filteredData = Object.fromEntries(
      Object.entries(data).filter(([_, v]) => v !== undefined),
    );

    await salesModel.updateSaleById(Number(id), filteredData);

    return res
      .status(200)
      .json({ message: "Berhasil memperbarui data penjualan" });
  } catch (error) {
    next(error);
  }
};

const deleteSaleById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new ClientError("Harap cantumkan id.", 403);
    }

    await salesModel.deleteSaleById(Number(id));

    return res
      .status(200)
      .json({ message: "Berhasil menghapus data penjualan" });
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

const searchSalesByName = async (req, res, next) => {
  try {
    const { item } = req.query;

    if (!item) {
      throw new ClientError("Harap masukkan nama item", 403);
    }

    const sales = await salesModel.getSalesByName(item);

    if (!sales.length) {
      throw new ClientError(
        `Tidak ada data penjualan untuk dengan nama ${item}`,
        404,
      );
    }

    return res
      .status(200)
      .json({ message: "Berhasil mengambil data penjualan", sales });
  } catch (error) {
    next(error);
  }
};

const getSalesSortedByName = async (req, res, next) => {
  try {
    const sales = await salesModel.getSalesSortedByName();

    if (!sales.length) {
      throw new ClientError("Tidak ada data penjualan untuk ditampilkan", 404);
    }

    return res.status(200).json({
      message: "Berhasil mengurutkan data penjualan berdasarkan nama",
      sales,
    });
  } catch (error) {
    next(error);
  }
};

const getSalesSortedByDate = async (req, res, next) => {
  try {
    const { sort } = req.query;
    const sales = await salesModel.getSalesSortedByDate(sort);

    if (!sales.length) {
      throw new ClientError("Tidak ada data penjualan untuk ditampilkan", 404);
    }

    return res.status(200).json({
      message: "Berhasil mengurutkan data penjualan berdasarkan nama",
      sales,
    });
  } catch (error) {
    next(error);
  }
};

const salesController = {
  createSale,
  updateSaleById,
  deleteSaleById,
  getAllSales,
  searchSalesByName,
  getSalesSortedByName,
  getSalesSortedByDate
};

export default salesController;
