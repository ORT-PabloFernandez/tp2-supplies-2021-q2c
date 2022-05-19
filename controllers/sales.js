const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){    
    return sales.get1Sale(id);
}

async function filterByAllPurchaseMethod(method){    
    return sales.filterByPurchaseMethod(method);
}

async function filterAllSalesByEmail(email){    
    return sales.filterSalesByEmail(email);
}

async function filterByAllDissatisfaction(){    
    return sales.filterByDissatisfaction();
}

async function salesAllAmountByLocations(){    
    return sales.salesAmountByLocations();
}

salesAllAmountByLocations

module.exports = {
    getSales, 
    getSale, 
    filterByAllPurchaseMethod, 
    filterAllSalesByEmail, 
    filterByAllDissatisfaction, 
    salesAllAmountByLocations
};