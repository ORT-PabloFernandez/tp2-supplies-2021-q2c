const sales = require('../data/supplies');

async function getSales(purchaseMethod){    
    if (!purchaseMethod)
        return sales.getAllSales();
    return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSaleById(id) {
    return sales.getSaleById(id);
}

async function getSalesByCustomer(email){
    return sales.getSalesByCustomer(email);
}

async function getSalesByUnsatisfiedCustomers(){
    return sales.getSalesByUnsatisfiedCustomers();
}

module.exports = {getSales, getSaleById, getSalesByCustomer, getSalesByUnsatisfiedCustomers};