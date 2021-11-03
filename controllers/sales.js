const { NotFound } = require('http-errors');
const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){    
    const sale = await sales.findById(id);
    if (!sale) {
        console.log(`Sale with id${id} not found`);
        throw NotFound(`La venta con id ${id} no fue encontrada.`);
    }
    return sale;
}

async function findAllByPurchaseMethod(method){    
    return await sales.findAllByPurchaseMethod(method);
}

module.exports = {getSales, getSaleById, findAllByPurchaseMethod};