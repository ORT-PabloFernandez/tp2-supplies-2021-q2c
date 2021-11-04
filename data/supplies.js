const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const mongodb = require('mongodb')


async function getAllSales(){
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
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ _id: new mongodb.ObjectId(id) })
        .toArray();
    return supplies;
}

async function getSalesByMethod(method) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'purchaseMethod': method })
        .toArray();
    return supplies;
}

async function getSaleByEmail(email) {
    console.log(email);
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.email': email })
        .toArray();
    return supplies;
}

async function getSalesByUnsatisfied() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.satisfaction': { $lt: 3 } })
        .toArray();
    return supplies;

}

async function getSalesByLocation(location) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'storeLocation': location})
        .toArray();

    return supplies;
}

module.exports = {getAllSales, getSalesByMethod, getSaleById, getSaleByEmail, getSalesByUnsatisfied, getSalesByLocation};