import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createSale = (newSale) => {
  return prisma.sales.create({ data: newSale });
};

const updateSaleById = (id, filteredData) => {
  return prisma.sales.update({ where: { id }, data: filteredData });
};

const getAllSales = () => prisma.sales.findMany();

const salesModel = { createSale, updateSaleById, getAllSales };

export default salesModel;
