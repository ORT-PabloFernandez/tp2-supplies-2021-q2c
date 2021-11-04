const express = require('express');
const { NotFound, RangeNotSatisfiable } = require('http-errors');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/customers', async (req, res) => {
    if (req.query.satisfied !== undefined) {
        const satisfied = !!parseInt(req.query.satisfied);
        console.log('Fetching customers with satisfaction', satisfied);
        res.json(await controller.findAllCustomersBySatisfaction(satisfied));
    } else {
        res.status(400).json({message: "Debe indicar un filtro"});
    }    
});

router.get('/', async (req, res) => {
    if (req.query.purchase_method) {
        const purchaseMethod = req.query.purchase_method;
        res.json(await controller.findAllByPurchaseMethod(purchaseMethod));
    } else if (req.query.customer_email) {
        const customerEmail = req.query.customer_email;
        res.json(await controller.findAllByCustomerEmail(customerEmail));
    } else {
        res.json(await controller.getSales());
    }    
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await controller.getSaleById(req.params.id));
    } catch(error) {
        // Este catch se podría hacer genérico en un middleware. Si me da el tiempo lo hago...
        if (error instanceof NotFound) {
            res.status(404).json({message: error.message});
        }
        throw error;
    }
});

module.exports = router;