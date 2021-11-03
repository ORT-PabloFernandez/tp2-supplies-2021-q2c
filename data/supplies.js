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

async function findById(id) {
    const connectiondb = await conn.getConnection();
    console.log('Fetching sale with id', id);
    return await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: conn.ObjectId(id)});
}

async function findAllByPurchaseMethod(method) {
    const connectiondb = await conn.getConnection();
    console.log('Fetching all sales with purchase method', method);
    return await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: method})
                        .toArray();
}

async function findAllByCustomerEmail(email) {
    const connectiondb = await conn.getConnection();
    console.log('Fetching all sales of customer with email', email);
    return await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({'customer.email': email})
                        .toArray();
}

module.exports = {getAllSales, findById, findAllByPurchaseMethod, findAllByCustomerEmail};