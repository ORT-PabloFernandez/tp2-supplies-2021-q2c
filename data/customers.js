const conn = require('./conn');
const DATABASE = 'sample_supplies';
const SALES = 'sales';

async function getCustomerByEmail(email) {
    const connectiondb = await conn.getConnection();
    const customerSales = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({ 'customer.email': email })
                        .toArray();
    return customerSales;
}

async function getUnsatisfiedCustomers() {
    const connectiondb = await conn.getConnection();
    const customers = await connectiondb
                        .db(DATABASE)
                        .collection(SALES)
                        .find({ 'customer.satisfaction': {$lt: 3} })
                        .map(it => it['customer'])
                        .toArray();
    return customers;
}


//Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)

module.exports = {getCustomerByEmail, getUnsatisfiedCustomers}