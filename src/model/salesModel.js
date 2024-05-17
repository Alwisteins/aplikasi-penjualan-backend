import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createSale = (newSale) => {
  return prisma.sales.create({ data: newSale });
};

const updateSaleById = (id, filteredData) => {
  return prisma.sales.update({ where: { id }, data: filteredData });
};

const deleteSaleById = (id) => prisma.sales.delete({ where: { id } });

const getAllSales = () => prisma.sales.findMany();

const getSalesByName = (name) => prisma.sales.findMany({ where: { item } });

const getSalesSortedByName = () => {
  return prisma.sales.findMany({ orderBy: { item: "asc" } });
};

const getSalesSortedByDate = (sort) => {
  return prisma.sales.findMany({ orderBy: { date: sort } });
};

const salesModel = {
  createSale,
  updateSaleById,
  deleteSaleById,
  getAllSales,
  getSalesByName,
  getSalesSortedByName,
  getSalesSortedByDate,
};

export default salesModel;
