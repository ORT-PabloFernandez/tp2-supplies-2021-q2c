const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
async function getSalePorId(id) {
    return sales.getSale(id);
}

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod),
//que pueden ser: Phone, Online, In store...
async function getPurchasePorMethod(pMethod) {
    return sales.getPurchase(pMethod);
}

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
//Conexión a base para buscar las compras de un cliente buscando por email
async function getSaleCustomerPorEmail(email) {
    return sales.getSaleCustomer(email);
}

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
async function getCustomerInsatisfaction(satisfaction){
    return sales.getAllCustomerInsatisfaction(satisfaction);
}

module.exports = {getSales, getSalePorId, getPurchasePorMethod, getSaleCustomerPorEmail, getCustomerInsatisfaction};