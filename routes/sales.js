const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');


router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

// PUNTO 1

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    res.json(await controller.getSaleById(id));
});

// PUNTO 2

router.get('/purchaseMethod/:tipo', async (req, res) => {
    const tipo = req.params.tipo;

    res.json(await controller.getSalesByPurchaseMethod(tipo));
});

//PUNTO 3

router.get('/customer/data/:email', async (req, res) => {
    const email = req.params.email;

    res.json(await controller.getSalesByCustomerEmail(email));
});

//PUNTO 4 QUERY

router.get('/customer/satisfaction', async (req, res) => {
    const number = req.query.number;
    const sales = await controller.getSales();
    const salesSatisfaction = sales.filter(venta => venta.customer.satisfaction < number);
    let dissatisfiedCustomers = [];

    for (let i = 0; i < salesSatisfaction.length; i++){
        dissatisfiedCustomers
        .push(salesSatisfaction[i].customer);
    }

    res.json(dissatisfiedCustomers);
});

//PUNTO 4 ENDPOINT

/* router.get('/customer/satisfaction/:number', async (req, res) => {
    const number = req.params.number;
    const sales = await controller.getSales();
    
    res.json(sales.filter(venta => venta.customer.satisfaction < number));
}); */

/* router.get('/storeLocation/location', (req, res) => {
    const location = req.query.location;

    res.json(await controller.getSalesByLocation(location));
}); */

//PUNTO 5

router.get('/storeLocation/:location', async (req, res) => {
    
    const location = req.params.location;
    const ventas = await controller.getSalesByLocation(location);
    let total = 0;   

    for(let i=0; i < ventas.length; i++){
            let itemsActual = ventas[i].items;

            for(let j=0; j < itemsActual.length; j++){
                total += (itemsActual[j].price * itemsActual[j].quantity);
            }

    };

    res.json(`El total de las ventas en ${location} es de ${total}`);
});

module.exports = router;