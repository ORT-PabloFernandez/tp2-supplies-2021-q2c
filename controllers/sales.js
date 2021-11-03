const sales = require('../data/supplies');

async function getSales(purchaseMethod){    
    if (!purchaseMethod)
        return sales.getAllSales();
    return sales.getSalesByPurchaseMethod(purchaseMethod);
}

async function getSaleById(id) {
    return sales.getSaleById(id);
}


module.exports = {getSales, getSaleById};