const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get('/:id', async (req, res) => {
    res.json(await controller.getSale(req.params.id));
});

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra
// (purchaseMethod), que pueden ser: Phone, Online, In store...

router.get('/byMethod/:method', async (req, res) => {
    res.json(await controller.filterByAllPurchaseMethod(req.params.method));
});

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente customner por email

router.get('/byEmail/:email', async (req, res) => {
    res.json(await controller.filterAllSalesByEmail(req.params.email));
});

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
router.get('/dissatisfaction', async (req, res) => {
    console.log("doubleCheck");
    res.json(await controller.filterByAllDissatisfaction());
});

//5. Generar un endpoint para obtener el importe total de la venta por localizacion
router.get('/amountByLocations', async (req, res) => {
    console.log("doubleCheck2");
    res.json(await controller.salesAllAmountByLocations());
});

module.exports = router;