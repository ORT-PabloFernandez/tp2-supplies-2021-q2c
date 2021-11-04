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

async function getSalesById(id){
    const connectiondb = await conn.getConnection();
    const saleById = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)}) 
    return saleById;

}

async function getSalesByMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const salesByMethod = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"purchaseMethod": purchaseMethod})
                        .toArray();                       
    return salesByMethod;
}

async function getSalesByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const salesByMail = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": email})
                        .toArray();
    return salesByMail;
}

async function getSalesByUnsatisfiedCustomers(level){
    const connectiondb = await conn.getConnection();
    const saleUnsat = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({"customer.satisfaction" : {$lt : level} })
                    .toArray();
    return saleUnsat;
}

async function getSalesByLocation(location){
    const connectiondb = await conn.getConnection();
    const ventaslLoc = await connectiondb
                    .db(DATABASE)
                    .collection(SALES)
                    .find({"storeLocation" : location})
                    .toArray();
    const total = await totalLoc.reduce((acum, sale) => acum + sale.item.reduce((sum, item) => sum + item.price, 0),0);

    return total;
}

module.exports = {getAllSales, getSalesById, getSalesByMethod, getSalesByCustomerEmail, getSalesByUnsatisfiedCustomers, getSalesByLocation};