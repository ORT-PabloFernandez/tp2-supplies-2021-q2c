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
    console.log(supplies);
    return supplies;
}

//Necesitamos un endpoint que nos devuelva una venta particular por _id
//5bd761dcae323e45a93cd070
async function getOneSale(id){
    const connectiondb = await conn.getConnection();
    const supplie = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({_id: new objectId(id)})
                        .toArray();    
    return supplie;
}

//Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra 
//(purchaseMethod), que pueden ser: Phone, Online, In store...
async function getPurchaseMethod(pm){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({purchaseMethod: pm})
                        .toArray();   
    return supplies;
}

//Necesitamos un endpoint que nos devuelva las compras de un cliente customner por email
async function getSalesByEmail(mail){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.email": mail })
                        .toArray();    
    return supplies;
}

//Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
async function getInsatisfechos(){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({"customer.satisfaction": {$lt: 3} })
                        .toArray();    
    return supplies;
}

//Generar un endpoint para obtener el importe total de la venta por localizacion
async function getImporteLocal(localizacion){
    const connectiondb = await conn.getConnection();
    const supplies = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({storeLocation: localizacion})
                        .toArray(); 
    let importe = darImporte(supplies);  
    return importe;
}

function darImporte(supplies){
    console.log(supplies);
    const valoresTotalesPorSede = supplies.map(sede => {
        return sede.items.reduce((prev, cur) => {
          const parcial = cur.quantity * cur.price.$numberDecimal;
          return prev + parcial;
        }, 0)
    })
    const sumatoriaSedes = valoresTotalesPorSede.reduce((prev,cur) => {
        return prev + cur;
    }, 0)
    return sumatoriaSedes;
}

module.exports = {getAllSales, getOneSale, getPurchaseMethod, getSalesByEmail, getInsatisfechos, getImporteLocal};