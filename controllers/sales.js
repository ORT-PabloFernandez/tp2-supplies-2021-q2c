const sales = require('../data/supplies');

/**
 * 0. Buscar: todas las venta
 * @returns Todas las Ventas
 */
async function getSales() {
	return sales.getAllSales();
}

/**
 * 1. Buscar: una venta particular por _id
 * @param {String} id
 * @returns Venta particular por _id
 */
async function getSaleById(id) {
	return sales.getSaleById(id);
}

/**
 * 2. Buscar: ventas filtradas por el metodo de compra
 * @param {String} purchaseMethod
 * @returns Ventas filtradas por el metodo de compra
 */
async function getSaleByPurchaseMethod(purchaseMethod) {
	return sales.getSaleByPurchaseMethod(purchaseMethod);
}

/**
 * 3. Buscar: compras de un cliente filtradas por email
 * @param {String} email
 * @returns compras de un cliente filtradas por email
 */
async function getSalesCustomerByEmail(email) {
	return sales.getSalesCustomerByEmail(email);
}

/**
 * 4. Buscar: clientes insatisfechos (con menor a 3 de satisfacción)
 * @param {Number} satisfaction
 * @returns  clientes insatisfechos (con menor a 3 de satisfacción)
 */
async function getSalesCustomerDissatisfaction(satisfaction) {
	return sales.getSalesCustomerDissatisfaction(satisfaction);
}

/**
 * 5 Buscar: ventas por localizacion
 * @param {String} storeLocation
 * @returns ventas por localizacion
 */
async function getSalesStoreLocation(storeLocation) {
	return sales.getSalesStoreLocation(storeLocation);
}

module.exports = {
	getSales,
	getSaleById,
	getSaleByPurchaseMethod,
	getSalesCustomerByEmail,
	getSalesCustomerDissatisfaction,
	getSalesStoreLocation,
};
