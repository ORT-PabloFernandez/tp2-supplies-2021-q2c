const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){    
    return sales.getSale(id);
}

async function getSaleForMethod(method){    
    return sales.getSaleForMethod(method);
}




module.exports = {getSales, getSale, getSaleForMethod};