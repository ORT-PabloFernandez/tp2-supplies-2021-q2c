const { ObjectId } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';

async function dataBase() {
	const connectiondb = await conn.getConnection();
	return await connectiondb.db(DATABASE).collection(SALES);
}

/**
 * 0. Buscar en BD: todas las ventas
 * @returns
 */
async function getAllSales() {
	const base = await dataBase();
	return await base.find().toArray();
}

/**
 * 1. Buscar en BD: venta particular por _id
 * @param {String} id
 * @returns Venta particular por _id
 */
async function getSaleById(id) {
	const base = await dataBase();
	return await base.find({ _id: new ObjectId(id) }).toArray();
}

/**
 * 2. Buscar en BD: ventas filtradas por metodo de compra (purchaseMethod)
 * @param {String} purchaseMethod
 * @returns Ventas filtradas por el metodo de compra
 */
async function getSaleByPurchaseMethod(purchaseMethod) {
	const base = await dataBase();
	return await base.find({ purchaseMethod: purchaseMethod }).toArray();
}

/**
 * 3. Buscar en BD: compras de un cliente filtradas por email
 * @param {String} email
 * @returns compras de un cliente filtradas por email
 */
async function getSalesCustormeByEmail(email) {
	const base = await dataBase();
	return await base.find({ custorme: { email: email } }).toArray();
}

module.exports = { getAllSales, getSaleById, getSaleByPurchaseMethod, getSalesCustormeByEmail };
