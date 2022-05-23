const { ObjectId } = require("mongodb");
const conn = require("./conn");
const DATABASE = "sample_supplies";
const SALES = "sales";

async function getAllSales() {
  const connectiondb = await conn.getConnection();
  const supplies = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find()
    .toArray();
  return supplies;
}

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
async function getSale(id) {
  const connectiondb = await conn.getConnection();
  const oneSale = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ _id: new ObjectId(id) })
    .toArray();
  return oneSale;
}
//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod),
//   que pueden ser: Phone, Online, In store...
async function getSalesByPurchaseMethod(pm) {
  const connectiondb = await conn.getConnection();
  const salesByPM = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ purchaseMethod: pm })
    .toArray();
  return salesByPM;
}

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente customer por email
async function getSalesByEmail(email) {
  const connectiondb = await conn.getConnection();
  const salesByEmail = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.email": email }) //revisar { customer.email: { $eq: email } }
    .toArray();
  return salesByEmail;
}

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
async function getUnsatisfiedCustomers() {
  const connectiondb = await conn.getConnection();
  const customers = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ "customer.satisfaction": { $lt: 3 } })
    .toArray();
  return customers;
}

// ****VERSION CON PARAMETROS NO FUNCIONA****
// async function getUnsatisfiedCustomersWithParams(num) {
//   console.log(num);
//   const connectiondb = await conn.getConnection();
//   const customers = await connectiondb
//     .db(DATABASE)
//     .collection(SALES)
//     .find({ "customer.satisfaction": { $lt: num } })
//     .toArray();
//   return customers;
// }

//5. Generar un endpoint para obtener el importe total de la venta por localizacion // NO FUNCIONA
async function getImporteTotal(location) {
  const stores = await connectiondb
    .db(DATABASE)
    .collection(SALES)
    .find({ storeLocation: location })
    .toArray(); // Hasta aca tengo un array de stores
  const totalsByLocation = stores.map((store) => ({
    //acumulo las ventas por cada store
    totalVentas: store.items.reduce(
      (acum, item) => (acum = item.quantity * item.price.$numberDecimal)
    ),
  }));
  return totalsByLocation;
}

module.exports = {
  getAllSales,
  getSale,
  getSalesByPurchaseMethod,
  getSalesByEmail,
  getUnsatisfiedCustomers,
  //getUnsatisfiedCustomersWithParams,
  getImporteTotal,
};
