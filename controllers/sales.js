const sales = require("../data/supplies");

async function getSales() {
  return sales.getAllSales();
}

async function getSale(id) {
  return sales.getSale(id);
}

async function getSalesByPurchaseMethod(pm) {
  return sales.getSalesByPurchaseMethod(pm);
}

async function getSalesByEmail(email) {
  return sales.getSalesByEmail(email);
}

async function getUnsatisfiedCustomers() {
  return sales.getUnsatisfiedCustomers();
}

// async function getUnsatisfiedCustomersWithParams(num) {
//   return sales.getUnsatisfiedCustomersWithParams(num);
// }

// NO FUNCIONA
async function getImporteTotal(location) {
  return sales.getImporteTotal(location);
}

module.exports = {
  getSales,
  getSale,
  getSalesByPurchaseMethod,
  getSalesByEmail,
  getUnsatisfiedCustomers,
  // getUnsatisfiedCustomersWithParams,
  getImporteTotal,
};
