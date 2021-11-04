const { NotFound } = require('http-errors');
const sales = require('../data/supplies');

const UNSATISFIED_LEVELS = [1, 2];
const SATISFIED_LEVELS = [3, 4, 5];

function getSatisfactionLevels(satisfied) {
    return satisfied ? SATISFIED_LEVELS : UNSATISFIED_LEVELS;
}

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

async function findAllByCustomerEmail(email){    
    return await sales.findAllByCustomerEmail(email);
}

async function findAllCustomersBySatisfaction(satisfied){    
    const saleList = await sales.findAllBySatisfactionLevelIn(getSatisfactionLevels(satisfied));
    return saleList.map(sale => sale.customer);
}

module.exports = {getSales, getSaleById, findAllByPurchaseMethod, findAllByCustomerEmail, findAllCustomersBySatisfaction};