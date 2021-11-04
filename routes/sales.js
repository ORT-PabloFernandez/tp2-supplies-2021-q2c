const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('id/:id', async (req, res) => {
    console.log("Id")
    res.json(await controller.getSaleById(req.params.id));
});

router.get('/purchaseMethod/:purchaseMethod', async (req, res) => {
    console.log("PurchaseMethod");
    res.json(await controller.getSalesByPurchaseMethod(req.params.purchaseMethod));
});

router.get('/totals/location/:location', async (req, res) => {
    console.log("Totals by location");
    res.json(await controller.getSalesTotalsByLocation(req.params.location));
});


module.exports = router;