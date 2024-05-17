const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const initialData = async () => {
  const salesData = [
    {
      id: 1,
      item: "Kopi",
      stock: 100,
      sold: 10,
      transaction_date: new Date("2021-05-01"),
      type: "Konsumsi",
    },
    {
      id: 2,
      item: "Teh",
      stock: 100,
      sold: 19,
      transaction_date: new Date("2021-05-05"),
      type: "Konsumsi",
    },
    {
      id: 3,
      item: "Kopi",
      stock: 90,
      sold: 15,
      transaction_date: new Date("2021-05-10"),
      type: "Konsumsi",
    },
    {
      id: 4,
      item: "Pasta Gigi",
      stock: 100,
      sold: 20,
      transaction_date: new Date("2021-05-11"),
      type: "Pembersih",
    },
    {
      id: 5,
      item: "Sabun Mandi",
      stock: 100,
      sold: 30,
      transaction_date: new Date("2021-05-11"),
      type: "Pembersih",
    },
    {
      id: 6,
      item: "Sampo",
      stock: 100,
      sold: 25,
      transaction_date: new Date("2021-05-12"),
      type: "Pembersih",
    },
    {
      id: 7,
      item: "Teh",
      stock: 81,
      sold: 5,
      transaction_date: new Date("2021-05-12"),
      type: "Konsumsi",
    },
  ];
  await prisma.sales.createMany({ data: salesData });
};

initialData()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
