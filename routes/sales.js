const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSaleById(req.params.id))
})

router.get('/purchaseMethod/:purchaseMethod', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesByPurchaseMethod(req.params.purchaseMethod))
})

router.get('/email/:email', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesByCustomerEmail(req.params.email))
})

router.get('/customers/unsatisfied', async (req, res) => {
    console.log("check");
    res.json(await controller.getUnsatisfiedCustomers())
})

router.get('/:location/total', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesTotalByLocation())
})

module.exports = router;