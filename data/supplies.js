const { ObjectId } = require("bson");
const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

async function getSaleById(id) {
  const connectiondb = await conn.getConnection();
  const sale = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne({ _id: ObjectId(id) });
  return sale;
}

async function getSalesFiltered(filter) {
  const connectiondb = await conn.getConnection();
  const sales = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(filter)
    .toArray();
  return sales;
}

async function getUnsatisfiedCustomers() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(
      { "customer.satisfaction": { $lt: 3 } },
      { projection: { _id: false, customer: true } }
    )
    .toArray();
  return customers;
}

async function getTotalsByLocation() {
  const connectiondb = await conn.getConnection();
  const totals = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .aggregate([
      { $unwind: "$items" },
      {
        $group: {
          _id: "$storeLocation",
          total: {
            $sum: {
              $toDouble: { $multiply: ["$items.price", "$items.quantity"] },
            },
          },
        },
      },
    ])
    .toArray();

  return totals;
}

module.exports = {
  getAllSales,
  getSaleById,
  getSalesFiltered,
  getUnsatisfiedCustomers,
  getTotalsByLocation,
};
