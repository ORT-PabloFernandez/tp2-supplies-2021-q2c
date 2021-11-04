const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async(req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/id/:id', async(req, res) => {
    try {
        let result = await controller.getSaleById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send('Error');
    }
});

router.get('/purchaseMethod/:purchaseMethod', async(req, res) => {
    try {
        let result = await controller.getSalesBypurchaseMethod(req.params.purchaseMethod);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send('Error');
    }
});

router.get('/email/:email', async(req, res) => {
    try {
        let result = await controller.getSalesByEmail(req.params.email);
        if (result.length === 0)
            return res.status(400).send('Sin datos');

        res.status(200).json(result);

    } catch (error) {
        res.status(500).send('Error');
    }
});

router.get('/customer/satisfaction', async(req, res) => {
    res.json(await controller.getClientBysatisfaction());
});

router.get('/totalLocation/:location', async(req, res) => {
    try {
        let result = await controller.getTotalByLocation(req.params.location);
        if (result.length === 0)
            return res.status(400).send('Sin datos');

        res.json(result.reduce((acc, val) => acc.concat(val)).reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0));

    } catch (error) {
        res.status(500).send('Error');
    }
});

module.exports = router;