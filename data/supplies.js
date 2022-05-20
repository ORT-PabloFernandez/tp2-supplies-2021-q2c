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

async function getSale(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb.db(DATABASE)
                                       .collection(SALES)
                                       .find({_id: new ObjectId(id)})
                                       .toArray();           
    console.log(supplies);
    return supplies;
}

async function getSaleByPurchaseMethod(Query){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb.db(DATABASE)
                                       .collection(SALES)
                                       .find({"purchaseMethod": Query})
                                       .toArray();;                               
    return supplies;
}

async function getSaleByEmail(email){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb.db(DATABASE)
                                       .collection(SALES)
                                       .find({"customer.email": email})
                                       .toArray();
    return supplies;
}

async function getSaleBySatisfaction(satisfaction){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb.db(DATABASE)
                                       .collection(SALES)
                                       .find({"customer.satisfaction": {$lt: 3}})
                                       .toArray();
    return supplies;
}

async function getTotalPerLocation(location){
    const connectiondb = await conn.getConnection();
    let total=0;
    const supplies = await connectiondb.db(DATABASE)
                                       .collection(SALES)
                                       .find({"storeLocation": location})
                                       .toArray();
    supplies.forEach(sale => {
        sale.items.forEach(item=>{
            total+= parseFloat(item.price);
        })
    });
    console.log(total);
    return total;
}

module.exports = {getAllSales, getSale, getSaleByPurchaseMethod, getSaleByEmail, getSaleBySatisfaction, getTotalPerLocation};