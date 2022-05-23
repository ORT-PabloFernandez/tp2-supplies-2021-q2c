const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){
    return sales.getOneSale(id);
}

async function getSalesByMethod(method){
    return sales.getSalesByPurchaseMethod(method);
}

async function getSalesForEmail(email){
    return sales.getCustomerForEmail(email);
}

async function getUnsatisfiedCustomers(value){
    return sales.getUnsatisfiedCustomers(value);
}

async function getTotalImportByLocation(location){
    return sales.getTotalImportBylocation(location);
}

async function getTotalByLocation(location){
    return sales.getTotalByLocation(location);
}

module.exports = {
    getSales, 
    getSale, 
    getSalesByMethod, 
    getSalesForEmail, 
    getUnsatisfiedCustomers, 
    getTotalImportByLocation,
    getTotalByLocation
};