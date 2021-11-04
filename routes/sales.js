const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

/**
 * 0. Endpoint: todas las ventas
 */
router.get('/', async (req, res) => {
	console.log('check');
	res.json(await controller.getSales());
});

/**
 * 1. Endpoint: venta particular por _id
 */
router.get('/:id', async (req, res) => {
	console.log('Venta particular por _id');
	res.json(await controller.getSaleById(req.params.id));
});

/**
 * 2. Endpoint: ventas filtradas por el metodo de compra
 */
router.get('/purchaseMethod/:method', async (req, res) => {
	console.log('Ventas filtradas por el metodo de compra');
	res.json(await controller.getSaleByPurchaseMethod(req.params.method));
});

/**
 * 3. Endpoint: compras de un cliente filtradas por email
 */
router.get('/customer/email/:email', async (req, res) => {
	console.log('Compras de un cliente filtradas por email');
	res.json(await controller.getSalesCustomerByEmail(req.params.email));
});

/**
 * 4. Endpoint: clientes insatisfechos (con menor a 3 de satisfacción)
 */
router.get('/customer/dissatisfaction/:satisfaction', async (req, res) => {
	console.log('Clientes insatisfechos (con menor a 3 de satisfacción)');
	res.json(await controller.getSalesCustomerDissatisfaction(req.params.satisfaction));
});

/**
 * 5 Endpoint: ventas por localizacion
 */
router.get('/storeLocation/:storeLocation', async (req, res) => {
	console.log('Ventas por localizacion');
	res.json(await controller.getSalesStoreLocation(req.params.storeLocation));
});

module.exports = router;
