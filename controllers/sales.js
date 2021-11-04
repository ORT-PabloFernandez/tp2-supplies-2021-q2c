const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalebyId(id){
    return sales.getSale(id)
}

async function getSaleByPurchaseMethod(method){
    return sales.getSaleByMethod(method)
}

async function getSaleByBuyerEmail(email){
    return sales.getSaleByEmail(email)
}

async function getClientBySatisfaction(number){
    return sales.getClientObjectBySatisfaction(number)
}

async function getTotalSalesAmountByLocation(location){
    return sales.getTotalSalesLocation(location)
}

module.exports = {
    getSales, 
    getSalebyId, 
    getSaleByPurchaseMethod, 
    getSaleByBuyerEmail, 
    getSaleByPurchaseMethod, 
    getClientBySatisfaction, 
    getTotalSalesAmountByLocation};