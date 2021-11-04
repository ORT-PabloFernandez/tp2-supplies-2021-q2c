const sales = require("../data/supplies");
const helpers = require("../helpers/salesHelpers");

async function getSales() {
  return sales.getAllSales();
}

async function getSaleById(id) {
  return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(purchaseMethod) {
  return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSalesByCustomerEmail(customerEmail) {
  return sales.getSalesByCustomerEmail(customerEmail);
}

async function getUnsatisfiedCustomers() {
  return sales.getUnsatisfiedCustomers();
}

async function getSalesTotalByStoreLocation(location) {
  const salesByLocation = await sales.getSalesByStoreLocation(location);
  return helpers.getLocationTotalSales(salesByLocation);
}

module.exports = {
  getSales,
  getSaleById,
  getSalesByPurchaseMethod,
  getSalesByCustomerEmail,
  getUnsatisfiedCustomers,
  getSalesTotalByStoreLocation,
};
