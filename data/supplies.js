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
    console.log(supplies.length)

    //pruebas para el punto 5
    const salesAux = supplies.map( sales => ({
            sales: {price: sales.items.price,
                    quantity: sales.items.quantity
            },
            location: sales.storeLocation
        })
    );
    console.log(salesAux);
    return supplies;
}

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
async function get1Sale(id){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new objectId(id)})
                        .toArray();
    return supplies;
}

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra
// (purchaseMethod), que pueden ser: Phone, Online, In store...
async function filterByPurchaseMethod(method){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: method})
                        .toArray();
    console.log(sales.length)
    return sales;
}

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente customner por email
async function filterSalesByEmail(eMail){
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": eMail})
                        .toArray();
    console.log(sales.length)
    return sales;
}

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
async function filterByDissatisfaction(){
    console.log("Pasa por aca");
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": {$lte:3}})
                        .toArray();
    console.log(supplies.length)
    return supplies;
}

//5. Generar un endpoint para obtener el importe total de la venta por localizacion

async function salesAmountByLocations(){
    console.log("Pasa por aca");
    const connectiondb = await conn.getConnection();
    const sales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .map(sales => sales);
    console.log(sales.length)
    return sales;
}


module.exports = {
    getAllSales, 
    get1Sale, 
    filterByPurchaseMethod, 
    filterSalesByEmail, 
    filterByDissatisfaction, 
    salesAmountByLocations};