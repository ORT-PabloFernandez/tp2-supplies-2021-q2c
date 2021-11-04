const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSaleById(id) {
  return sales.getSaleById(id);
}

async function getSalesFiltered(purchaseMethod, email) {
  let filter = {};

  if (purchaseMethod) filter.purchaseMethod = purchaseMethod;
  if (email) filter["customer.email"] = email;

  console.log(JSON.stringify(filter));

  return sales.getSalesFiltered(filter);
}

async function getUnsatisfiedCustomers() {
  return sales.getUnsatisfiedCustomers();
}

async function getTotalsByLocation() {
  return sales.getTotalsByLocation();
}

module.exports = {
  getSales,
  getSaleById,
  getSalesFiltered,
  getUnsatisfiedCustomers,
  getTotalsByLocation,
};
