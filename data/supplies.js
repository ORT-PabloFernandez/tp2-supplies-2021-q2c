const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const objectId = require('mongodb').ObjectId;


async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSale(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new objectId(id)})
                        .toArray();   
    return supplies;
}

async function getSaleForMethod(method){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: method})
                        .toArray();   
    return supplies;
}

async function getItems(mail){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": mail})
                        .toArray();   
    return supplies
    ;
}

async function getUsersNothappy(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": {$gt:3}})
                        .toArray();   
    return supplies
    ;
}






module.exports = {getAllSales, getSale, getSaleForMethod, getItems, getUsersNothappy};