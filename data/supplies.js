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
  const query = { _id: new ObjectId(id) };
  const supply = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .findOne(query);
  return supply;
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  const connectiondb = await conn.getConnection();
  const query = { purchaseMethod: purchaseMethod };
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(query)
    .toArray();
  return supplies;
}

async function getSalesByCustomerEmail(customerEmail) {
  const connectiondb = await conn.getConnection();
  const query = { "customer.email": customerEmail };
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(query)
    .toArray();
  return supplies;
}

async function getUnsatisfiedCustomers() {
  const connectiondb = await conn.getConnection();
  //prettier-ignore
  const query = { "customer.satisfaction": { "$lt": 3 } };
  //prettier-ignore-end
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(query)
    .toArray();
  return supplies;
}

async function getSalesByStoreLocation(location) {
  const connectiondb = await conn.getConnection();
  const query = { storeLocation: location };
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find(query)
    .toArray();
  return supplies;
}

module.exports = {
  getAllSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getUnsatisfiedCustomers,
  getSalesByStoreLocation,
};
