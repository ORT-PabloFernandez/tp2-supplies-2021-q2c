const conn = require('./conn');
const ObjectId = require('mongodb').ObjectId;
const DATABASE = 'sample_supplies';
const SALES = 'sales';


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSaleById(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({'_id': new ObjectId(id)});
    return supplies;
}

async function getSalesByPurchaseMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'purchaseMethod': purchaseMethod})
                        .toArray();    
    return supplies;
}

async function getSalesByCustomner(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.email': email})
                        .toArray();    
    return supplies;
}


module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomner};