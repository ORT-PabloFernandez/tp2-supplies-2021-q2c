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

 async function getSalesByCustomner(email){    
    return sales.getSalesByCustomner(email);
 }

module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomner};