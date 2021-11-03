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

async function findSaleById(id){
    const connectiondb = await conn.getConnection();
    console.log('Fetching sale with id', id);
    return await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: conn.ObjectId(id)});
}

module.exports = {getAllSales, findSaleById};