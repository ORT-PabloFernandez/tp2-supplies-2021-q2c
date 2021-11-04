const { ObjectId } = require('bson');
const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';
const SATISFACTION_THRESHOLD = 3;

async function getAllSales(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find()
                        .toArray();    
    return supplies;
}

async function getSalesByPurchaseMethod(purchaseMethod) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'purchaseMethod': purchaseMethod})
                        .toArray();    
    return supplies;
}

async function getSaleById(id) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({'_id': ObjectId(id)});    
    return supplies;
}


async function getSalesByCustomer(email) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.email': email})
                        .toArray();    
    return supplies;
}

async function getSalesByUnsatisfiedCustomers() {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.satisfaction': { $lt: SATISFACTION_THRESHOLD }})
                        .toArray();    
    return supplies;
}

async function getSalesTotals(storeLocation) {
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .aggregate(
                            [
                              {
                                  $unwind: '$items'
                              },
                              {
                                  $match: {'storeLocation': storeLocation}},
                              {
                                $group:
                                  {
                                    '_id': { 'storeLocation': '$storeLocation' },
                                    'totalAmount': { $sum: { $multiply: ['$items.price', '$items.quantity']} }
                                  }
                              }
                            ]
                         )
                        .toArray();    
    return supplies;
}

module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomer, getSalesByUnsatisfiedCustomers, getSalesTotals};