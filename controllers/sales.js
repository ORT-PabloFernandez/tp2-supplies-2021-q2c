const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales()
}

async function getSaleById(id){    
    return sales.getSaleById(id)
}

async function getSalesByPurchaseMethod(purchaseMethod){    
    return sales.getSalesByPurchaseMethod(purchaseMethod)
}

async function getSalesByCustomerEmail(email){    
    return sales.getSalesByCustomerEmail(email)
}

async function getUnsatisfiedCustomers(){
    return sales.getUnsatisfiedCustomers()
}

async function getSalesTotalByLocation(location){
    const totalSales = await sales.getSalesByLocation(location)
    const total = await totalSales.reduce((total, sale) => total + sale.items.reduce((totItems, item) => totItems + item.price.$numberDecimal,0),0)
    return total
}
module.exports = {getSales, getSaleById, getSalesByPurchaseMethod, getSalesByCustomerEmail, getUnsatisfiedCustomers, getSalesTotalByLocation}