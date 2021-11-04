const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSalesByMethod(method){    
    return sales.getSalesByMethod(method);
}

async function getSaleById(id){    
    return sales.getSaleById(id);
}

async function getSaleByEmail(email){    
    return sales.getSaleByEmail(email);
}

async function getSalesByUnsatisfied(){    
    return sales.getSalesByUnsatisfied();
}

async function getSalesByLocation(location){
return sales.getSalesByLocation(location);
}

module.exports = {getSales, getSalesByMethod, getSaleById, getSaleByEmail, getSalesByUnsatisfied, getSalesByLocation};