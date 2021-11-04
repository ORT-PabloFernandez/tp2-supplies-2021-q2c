const sales = require('../data/supplies');

async function getSales() {
    return sales.getAllSales();
}

async function getSaleById(id) {
    return sales.getSaleById(id);
}

async function getSalesBypurchaseMethod(purchaseMethod) {
    return sales.getSalesBypurchaseMethod(purchaseMethod);
}

async function getSalesByEmail(email) {
    return sales.getSalesByEmail(email);
}

async function getClientBysatisfaction() {
    return sales.getClientBysatisfaction();
}

async function getTotalByLocation(location) {
    return sales.getTotalByLocation(location);
}

module.exports = { getSales, getSaleById, getSalesBypurchaseMethod, getSalesByEmail, getClientBysatisfaction, getTotalByLocation };