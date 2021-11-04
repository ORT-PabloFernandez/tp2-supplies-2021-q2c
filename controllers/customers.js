const customers = require('../data/customers');

async function getCustomerByEmail(email) {
    return customers.getCustomerByEmail(email);
}

async function getUnsatisfiedCustomers() {
    return customers.getUnsatisfiedCustomers();
}

module.exports = {getCustomerByEmail, getUnsatisfiedCustomers};