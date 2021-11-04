const { ObjectId } = require('bson');
const conn = require('./conn');
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
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});
    return ventas;
}

async function getSalesByPurchaseMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: purchaseMethod})
                        .toArray();
    return ventas;
}

async function getSalesByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": email})
                        .toArray();

    return ventas;
}

async function getSalesByLocation(location){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({storeLocation: location})
                        .toArray();

    return ventas;
}

async function getCustomers(){
    const connectiondb = await conn.getConnection();
    const ventas = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    

    return ventas;
}


module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getSalesByLocation};