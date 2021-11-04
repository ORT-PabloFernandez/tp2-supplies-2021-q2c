const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    console.log("Venta particular por ID");
    res.json(await controller.getSaleID(req.params.id));
});

router.get('/purchaseMethod', async (req, res) => {
    console.log("Ventas filtradas por el método de compra");
    res.json(await controller.getSalePurchaseMethod(req.params.purchaseMethod));
});

router.get('/customnerEmail', async (req, res) =>{
    console.log("Compras de un cliente customner por email");
    res.json(await controller.getSaleCustomnerEmail(req.params.email));
});

router.get('/customnersInstatisfied', async (req, res) =>{
    console.log("Clientes con menos de 3 de satisfacción");
    res.json(await controller.getCustomnersInstatisfied());
});

router.get('/locationSales', async (req, res) =>{
    console.log("Importe total de venta por localización");
    res.json(await controller.getSalesLocation(req.params.location));
});

module.exports = router;