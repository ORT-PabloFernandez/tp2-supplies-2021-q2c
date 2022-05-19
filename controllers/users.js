const sales = require('../data/supplies');

async function getItems(mail){    
    return sales.getItems(mail);
}

async function getUsersNothappy(){    
    return sales.getUsersNothappy();
}

module.exports = {getItems, getUsersNothappy};