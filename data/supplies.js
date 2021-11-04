const conn = require('./conn');
const { ObjectId } = require("bson");
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

async function getSale(id) {
    const connectiondb = await conn.getConnection();
    const sale = connectiondb
      .db(DATABASE)
      .collection(SALES)
      .findOne({_id: new ObjectId(id)});
    return sale;
  }

async function getSaleByMethod(method){
    const connectiondb = await conn.getConnection();
    const sales = connectiondb
      .db(DATABASE)
      .collection(SALES)
      .find({'purchaseMethod': method})
      .toArray()
    return sales;
}

async function getSaleByEmail(email){
    const connectiondb = await conn.getConnection();
    const sales = connectiondb
      .db(DATABASE)
      .collection(SALES)
      .find({"customer.email":email})
      .toArray();
    return sales;
}

async function getClientObjectBySatisfaction(){
    const connectiondb = await conn.getConnection();
    const buyers = connectiondb
        .db(DATABASE)
        .collection(SALES)
        .find({ "customer.satisfaction": {$lt: 3} })
        .toArray();
    return buyers;
}

async function getTotalSalesLocation(location){
    const connectiondb = await conn.getConnection();
    const sales = connectiondb
      .db(DATABASE)
      .collection(SALES)
      .find({storeLocation:location})
      .toArray()
    
      let total = 0
    /*
    LOGIC TO LOOP EACH ITEM IN THE ARRAY AND SUMMARIZE THE TOTAL AMOUNT  
    sales.forEach(e => {
        total = total + parseInt(e.price)
    });
    */
   return total
}


module.exports = {
    getAllSales, 
    getSale,
    getSaleByMethod,
    getSaleByEmail,
    getTotalSalesLocation, 
    getClientObjectBySatisfaction};