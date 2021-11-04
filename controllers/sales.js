const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleID(id){
    return sales.getSaleID(id);
}

async function getSalePurchaseMethod(purchaseMethod){
    return sales.getSalePurchaseMethod(purchaseMethod);
}

async function getSaleCustomnerEmail(email){
    return sales.getSaleCustomnerEmail(email);
}

async function getCustomnersInstatisfied(){
    return sales.getCustomnersInstatisfied;
}

async function getSalesLocation(location){
    return sales.getSalesLocation(location);
}

module.exports = {getSales, getSaleID, getSalePurchaseMethod, getSaleCustomnerEmail, getCustomnersInstatisfied, getSalesLocation};