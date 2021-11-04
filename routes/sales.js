const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");   

    try {
        let sales = await controller.getSales(req.query.purchaseMethod);
        sales.length ? res.json(sales) : res.status(404).json({});
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/customer', async (req, res) => {
    try {        
        let sales = await controller.getSalesByCustomer(req.query.email);
        sales.length ? res.json(sales) : res.status(404).json([]);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/customer/unsatisfied', async (req, res) => {
    try {        
        let sales = await controller.getSalesByUnsatisfiedCustomers();
        sales.length ? res.json(sales) : res.status(404).json([]);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/total', async (req, res) => {
    try {        
        console.log("nacho check" + req.query.location);
        let sales = await controller.getSalesTotals(req.query.location);
        sales.length ? res.json(sales) : res.status(404).json([]);
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        let sale = await controller.getSaleById(id);
        sale ? res.json(sale) : res.status(404).json({});
    } catch (error) {
        res.status(500).json({});
    }
});



module.exports = router;