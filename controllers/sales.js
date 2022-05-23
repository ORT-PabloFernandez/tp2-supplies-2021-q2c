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

async function getDissatisfiedCustomers(value){
    return sales.getDissatisfiedCustomers(value);
}

async function getTotalImportByLocation(location){
    return sales.getTotalImportBylocation(location);
}

module.exports = {
    getSales, 
    getSale, 
    getSalesByMethod, 
    getSalesForEmail, 
    getDissatisfiedCustomers, 
    getTotalImportByLocation
};