const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){    
    return sales.getSaleById(id);
}

module.exports = {getSales, getSaleById};