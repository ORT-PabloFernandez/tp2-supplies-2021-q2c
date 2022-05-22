const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/porId/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSale(req.params.id));
});

router.get('/porMetodoCompra', async (req, res) => {
    console.log("check");
    res.json(await controller.getPurchaseMethod(req.query.purchaseMethod));
});

router.get('/porEmail/:email', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesByEmail(req.params.email));
});

router.get('/insatisfechos', async (req, res) => {
    console.log("check");
    res.json(await controller.getInsatisfechos());
});

router.get('/importeLocal/:storeLocation', async (req, res) => {
    console.log("check");
    res.json(await controller.getImporteLocal(req.params.storeLocation));
});

module.exports = router;