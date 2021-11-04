const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){
    return sales.getSaleById(id);
}

async function getSalesByMethod(method){
    return sales.getSalesByMethod(method);
}

async function getSalesForCustommer(email){
    return sales.getSalesForCustommer(email);
}

module.exports = {getSales, getSaleById, getSalesByMethod, getSalesForCustommer};