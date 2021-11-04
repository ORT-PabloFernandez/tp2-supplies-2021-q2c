const { ObjectId } = require('bson')
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
                        .findOne({_id: new ObjectId(id)})
                           
    return sale;
}

async function getSalesByPurchaseMethod(purchaseMethod){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: purchaseMethod})
                        .toArray()
                           
    return sales;
}

async function getSalesByCustomerEmail(email){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": email})
                        .toArray()
                           
    return sales;
}

async function getUnsatisfiedCustomers(){
  const allSales = await getAllSales()
  const customers = allSales
  .filter((sale) => sale.customer.satisfaction < 3)
  .map((sale) => {
      const customer = sale.customer;
      return customer
  })       
  return customers                
}

async function getSalesByLocation(location){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({storeLocation: location})
                        .toArray()  
    return supplies;
}

module.exports = {getAllSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getUnsatisfiedCustomers, getSalesByLocation};