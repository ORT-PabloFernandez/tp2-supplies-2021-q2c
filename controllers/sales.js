const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSalesByPurchaseMethod(purchaseMethod){
    return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSalesByCustomerEmail(email){
    return sales.getSalesByCustomerEmail(email);
}

async function getSalesByLocation(location){
    return sales.getSalesByLocation(location);
}

module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getSalesByLocation};