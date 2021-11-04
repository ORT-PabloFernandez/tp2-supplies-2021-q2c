const express = require('express');
const router = express.Router();
const controller = require('../controllers/customers');

router.get('/email/:email', async (req, res) => {
    console.log('Customer email');
    res.json(await controller.getCustomerByEmail(req.params.email));
});

router.get('/unsatisfied', async (req, res) => {
    console.log('Customer unsatisfied');
    res.json(await controller.getUnsatisfiedCustomers());
});

module.exports = router;