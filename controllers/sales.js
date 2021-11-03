const { NotFound } = require('http-errors');
const sales = require('../data/supplies');

async function getSales(){    
    return sales.getAllSales();
}

async function getSaleById(id){    
    const sale = await sales.findSaleById(id);
    if (!sale) {
        console.log(`Sale with id${id} not found`);
        throw NotFound(`La venta con id ${id} no fue encontrada.`);
    }
    return sale;
}

module.exports = {getSales, getSaleById};