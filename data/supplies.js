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

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
//Conexión a base para buscar la venta por id
async function getSale(id){
    const connectiondb = await conn.getConnection();
    const supplie = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .findOne({_id: new ObjectId(id)});    
    return supplie;
}

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod),
//que pueden ser: Phone, Online, In store...
//Conexión a base para buscar la venta del metodo de compra indicado 
async function getPurchase(pMethod){
    const connectiondb = await conn.getConnection();
    const suppliesPorMethod = await connectiondb
                                .db(DATABASE)
                                .collection(SALES)
                                .find({purchaseMethod : pMethod})
                                .toArray();
    return suppliesPorMethod;
}

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
//Conexión a base para buscar las compras de un cliente buscando por email
async function getSaleCustomer(email) {
    const connectiondb = await conn.getConnection();
    const suppliePorCustomer = await connectiondb
                                .db(DATABASE)
                                .collection(SALES)
                                .findOne({'customer.email' : email});
    return suppliePorCustomer;
} 

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
//Conexión a base para buscar los clientes una satisfacción menor a 3 
async function getAllCustomerInsatisfaction(satisfaction) {
    const connectiondb = await conn.getConnection();
    const satisfactionInt = parseInt(satisfaction);
    const suppliesPorSatisfaction = await connectiondb
                                        .db(DATABASE)
                                        .collection(SALES)
                                        .find({'customer.satisfaction' : {$lt : satisfactionInt}})
                                        .toArray();
    return suppliesPorSatisfaction;
}

module.exports = {getAllSales, getSale, getPurchase, getSaleCustomer, getAllCustomerInsatisfaction};