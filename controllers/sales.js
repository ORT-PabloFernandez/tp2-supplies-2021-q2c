const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){    
    return sales.getSale(id);
}

async function getSaleByPurchaseMethod(Query){
    return sales.getSaleByPurchaseMethod(Query);
}

async function getSaleByEmail(email){
    return sales.getSaleByEmail(email);
}

async function getSaleBySatisfaction(satisfaction){
    return sales.getSaleBySatisfaction(satisfaction);
}

async function getTotalPerLocation(location){
    return sales.getTotalPerLocation(location);
}

module.exports = {getSales, getSale, getSaleByPurchaseMethod, getSaleByEmail, getSaleBySatisfaction, getTotalPerLocation};