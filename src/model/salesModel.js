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

const getSalesByName = (item) => prisma.sales.findMany({ where: { item } });

const getSalesSortedByName = () => {
  return prisma.sales.findMany({ orderBy: { item: "asc" } });
};

const getSalesSortedByDate = (sort) => {
  return prisma.sales.findMany({ orderBy: { date: sort } });
};

const getSalesByTypeAndSortBySold = async (type, sold, startDate, endDate) => {
  const gte = startDate ? new Date(startDate) : undefined;
  const lte = endDate ? new Date(endDate) : undefined;
  const whereClause =
    gte || lte != null ? { type, transaction_date: { gte, lte } } : { type };

  const direction = sold.terbanyak ? "asc" : "desc";

  return prisma.sales.findMany({
    where: whereClause,
    orderBy: { sold: direction },
  });
};

const salesModel = {
  createSale,
  updateSaleById,
  deleteSaleById,
  getAllSales,
  getSalesByName,
  getSalesSortedByName,
  getSalesSortedByDate,
  getSalesByTypeAndSortBySold,
};

export default salesModel;
