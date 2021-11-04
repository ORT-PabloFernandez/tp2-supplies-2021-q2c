const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesById(id){
    return sales.getSalesById(id);
}

async function getSalesByMethod(purchaseMethod){
    return sales.getSalesByMethod(purchaseMethod);
}

async function getSalesByCustomerEmail(email){
    return sales.getSalesByCustomerEmail(email);
}

async function getSalesByUnsatisfiedCustomers(level){
    return sales.getSalesByUnsatisfiedCustomers(level);
}

async function getSalesByLocation(location){
   return sales.getSalesByMethod(location);
}


module.exports = {getSales, getSalesById, getSalesByMethod, getSalesByUnsatisfiedCustomers, getSalesByLocation};