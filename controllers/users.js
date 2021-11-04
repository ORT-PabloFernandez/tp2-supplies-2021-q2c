const sales = require('../data/supplies');

async function getInsatisfiedUsers(){
    const users = await sales.getUsers();
    return users.filter(user => user.satisfaction < 3);
}
    
module.exports = {getInsatisfiedUsers}