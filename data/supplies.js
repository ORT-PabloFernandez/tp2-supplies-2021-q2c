const { ObjectId } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';

/**
 * 0. Buscar en BD: todas las ventas
 * @returns todas las ventas
 */
async function getAllSales() {
	const connectiondb = await conn.getConnection();
	return await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find()
        .toArray();
}

/**
 * 1. Buscar en BD: venta particular por _id
 * @param {String} id
 * @returns Venta particular por _id
 */
async function getSaleById(id) {
	const connectiondb = await conn.getConnection();
	return await connectiondb
		.db(DATABASE)
		.collection(SALES)
		.findOne({ _id: new ObjectId(id) })
		.toArray();
}

/**
 * 2. Buscar en BD: ventas filtradas por metodo de compra (purchaseMethod)
 * @param {String} purchaseMethod
 * @returns Ventas filtradas por el metodo de compra
 */
async function getSaleByPurchaseMethod(purchaseMethod) {
	const connectiondb = await conn.getConnection();
	return await connectiondb
		.db(DATABASE)
		.collection(SALES)
		.find({ purchaseMethod: purchaseMethod })
		.toArray();
}

/**
 * 3. Buscar en BD: compras de un cliente filtradas por email
 * @param {String} email
 * @returns compras de un cliente filtradas por email
 */
async function getSalesCustomerByEmail(email) {
	const connectiondb = await conn.getConnection();
	return await connectiondb
		.db(DATABASE)
		.collection(SALES)
		.find({ 'customer.email': email })
		.toArray();
}

/**
 * 4. Buscar en BD: clientes insatisfechos (con menor a 3 de satisfacción)
 * @param {Number} satisfaction
 * @returns  clientes insatisfechos (con menor a 3 de satisfacción)
 */
async function getSalesCustomerDissatisfaction(satisfaction) {
	const connectiondb = await conn.getConnection();
	return await connectiondb
		.db(DATABASE)
		.collection(SALES)
		.find({ 'customer.satisfaction': { $lt: parseInt(satisfaction) } })
		.toArray();
}

/**
 * 5. Buscar en BD: ventas por localizacion
 * @param {String} storeLocation
 * @returns
 */
async function getSalesStoreLocation(storeLocation) {
	const connectiondb = await conn.getConnection();
	return await connectiondb
		.db(DATABASE)
		.collection(SALES)
		.find({ storeLocation: storeLocation })
		.toArray();
}

module.exports = {
	getAllSales,
	getSaleById,
	getSaleByPurchaseMethod,
	getSalesCustomerByEmail,
	getSalesCustomerDissatisfaction,
	getSalesStoreLocation,
};
