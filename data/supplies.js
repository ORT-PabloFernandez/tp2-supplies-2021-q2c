const conn = require('./conn');
const { ObjectId } = require('bson');
const DATABASE = 'sample_supplies';
const SALES = 'sales';


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
                        .findOne({ '_id': new ObjectId(id) }); 
    return sale;
}

async function getSalesByPurchaseMethod(purchaseMethod) {
    const connectiondb = await conn.getConnection();
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({ 'purchaseMethod': purchaseMethod })
                        .toArray();
    return sale;
}

async function getSalesTotalsByLocation(location) {
    sales = await getAllSales();
    console.log(sales.filter(it => it['storeLocation'] == location));
    return sales.filter(it => it['storeLocation'] == location);
}

module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesTotalsByLocation};