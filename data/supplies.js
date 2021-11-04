const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const { ObjectId} = require ('bsion');


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSaleID(id){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({_id: new Object(id)})
    return sales;
}

async function getSalePurchaseMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({purchaseMethod: purchaseMethod})
                    .toArray()
    return sales;
}

async function getSaleCustomnerEmail(email){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .findOne({'customner.email': email})
                    .toArray()
    return sales;
}

async function getCustomnersInstatisfied(){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find(customner => customner.satisfaction < 3)
                    .toArray()
    return sales;
}

async function getSalesLocation(location){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({storeLocation: location})
                    .toArray()
    return sales;
}


module.exports = {getAllSales, getSaleID, getSalePurchaseMethod, getSaleCustomnerEmail, getCustomnersInstatisfied, getSalesLocation};