const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get('/:id', async (req, res) => {
    const idInput = req.params.id;
    console.log(`Venta del Id: ${idInput}`);
    const sale = await controller.getSalePorId(idInput);
    res.json(sale);
});

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod),
//que pueden ser: Phone, Online, In store...
//En caso de que no pase parametro devuelve todas las ventas
router.get('/purchaseMethod/method' , async (req, res) => {
    const method = req.query.methodInput;
    if (method) {
        console.log(`Ventas del método de compra: ${method}`);
        const salesPorMethod = await controller.getPurchasePorMethod(method);
        res.json(salesPorMethod);
    } 
    console.log(`Ventas del método de compra => Como no se recibio parametros se retornan todas las ventas`);
    res.json(await controller.getSales());
});

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
router.get('/customer/email/:email', async (req, res) => {
    const email = req.params.email;
    console.log(`Compras del Customer con email: ${email}`);
    const salePorEmail = await controller.getSaleCustomerPorEmail(email);
    res.json(salePorEmail);
});

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
router.get('/customers/insatisfaction' , async (req, res) => {
    const satisfaction = req.query.satisfaction;
    const satisfactionMenorTres = 3; //Por letra indica que es menor a 3
    if(satisfaction) {//En el caso de que envie valor de satisfacción 
        console.log(`Clientes con satisfacción menor a: ${satisfaction}`);
        const salesPorSatisfaction = await controller.getCustomerInsatisfaction(satisfaction);
        res.json(salesPorSatisfaction);
    } else {//En el caso de que no envie valor de satisfacción se toma el por letra que indica menor a 3
        console.log(`Clientes con satisfacción menor a: ${satisfactionMenorTres}`);
        const salesPorSatisfactionTres = await controller.getCustomerInsatisfaction(satisfactionMenorTres);
        res.json(salesPorSatisfactionTres);    
    }
});

module.exports = router;