import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createSale = (newSale) => {
  return prisma.sales.create({ data: newSale });
};

const getAllSales = () => prisma.sales.findMany();

const salesModel = { createSale, getAllSales };

export default salesModel;
