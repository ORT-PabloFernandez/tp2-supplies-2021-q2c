const { ObjectId } = require('mongodb');
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

async function getOneSale(id){
    const connectiondb = await conn.getConnection();
    const supply = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({_id: new ObjectId(id)})
        .toArray();
    return supply;
}

async function getSalesByPurchaseMethod(method){
    const connectiondb = await conn.getConnection();
    const suppliesByMethod = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({purchaseMethod: method})
        .toArray();
    return suppliesByMethod;
}

async function getCustomerForEmail(email){
    const connectiondb = await conn.getConnection();
    const salesForEmail = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({"customer.email": {$eq: email}})
        .toArray();
    return salesForEmail;
}

async function getDissatisfiedCustomers(value){
    const connectiondb = await conn.getConnection();
    const dissatisfiedCustomers = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({"customer.satisfaction": {$lt: value}})
        .toArray();
    return dissatisfiedCustomers;
}

async function getTotalImportBylocation(location){
    const connectiondb = await conn.getConnection();
    const totalImport = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .aggregate([
            {$match : {"storeLocation" : location}},
            {$unwind: "$items"},
            {$unwind: "$items.price"},
            {$group: {
                _id: null,
                Quantity_items: {$sum: "$items.quantity"},
                Total: {$sum: {$toDecimal: "$items.price."+ {$literal: "$numberDecimal"}}}
              }       
            }
        ]
    ).toArray();
    return totalImport;
}

module.exports = {
    getAllSales,
    getOneSale, 
    getSalesByPurchaseMethod, 
    getCustomerForEmail, 
    getDissatisfiedCustomers, 
    getTotalImportBylocation
};