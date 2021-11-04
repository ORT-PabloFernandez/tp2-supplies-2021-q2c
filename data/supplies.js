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
    const sale = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});

    return sale;                    
}

async function getSalesByMethod(method){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: method})
                        .toArray();

    return sales;
}

async function getSalesForCustommer(email) {
    console.log(email);
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ 'customer.email': email })
        .toArray();
    return supplies;
}

async function getUsers(){
    const sales = await getAllSales()
    const users = sales.map((sale) => {return sale.customer});
    return users;
}

module.exports = {getAllSales, getSaleById, getSalesByMethod, getSalesForCustommer, getUsers};

