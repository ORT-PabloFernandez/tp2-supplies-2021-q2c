const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSale(id){    
    return sales.getOneSale(id);
}

async function getPurchaseMethod(pm){    
    return sales.getPurchaseMethod(pm);
}

async function getSalesByEmail(mail){    
    return sales.getSalesByEmail(mail);
}

async function getInsatisfechos(){    
    return sales.getInsatisfechos();
}

async function getImporteLocal(localizacion){    
    return sales.getImporteLocal(localizacion);
}

module.exports = {getSales, getSale, getPurchaseMethod, getSalesByEmail, getInsatisfechos, getImporteLocal};