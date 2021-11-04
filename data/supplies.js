const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const ObjectId = require('mongodb').ObjectId;

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
    const result = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .findOne({ '_id': new ObjectId(id) });

    return result;
}

async function getSalesBypurchaseMethod(purchaseMethod) {
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'purchaseMethod': purchaseMethod })
        .toArray();

    return result;
}

async function getSalesByEmail(email) {
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.email': email })
        .toArray();

    return result;
}

async function getClientBysatisfaction() {
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.satisfaction': { $lt: 3 } })
        .map((sale) => { return sale.customer })
        .toArray();

    return result;
}

async function getTotalByLocation(location) {
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'storeLocation': location })
        .map((sale) => { return sale.items })
        .toArray();

    return result;
}

module.exports = { getAllSales, getSaleById, getSalesBypurchaseMethod, getSalesByEmail, getClientBysatisfaction, getTotalByLocation };