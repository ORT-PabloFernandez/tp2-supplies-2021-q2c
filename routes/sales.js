const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");

    try {
        const method = req.query.method;
        if (!method) {
            console.log("check all");
            res.json(await controller.getSales());
        }else{
            console.log("check by method");
            let sale = await controller.getSalesByMethod(method);
            if (sale.length === 0){
                console.log("check by method without data");
                res.status(404).json([]);
            }
            else{  
                console.log("check by method with data");
            res.json(sale);
            }
        }
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id;
        console.log("get sale by id " + id);
        let sale = await controller.getSaleById(id);
        if (!sale){
            console.log("check no sale");
            res.status(404).json({});
        }else{
            console.log("check by id with data");
            res.json(sale);
        }

    } catch (error) {
        res.status(500).send(error);
        
    }
});


router.get('/customers/unsatisfied/', async (req, res) => {
    console.log("check unsatisfied");

    try {
        let sale = await controller.getSalesByUnsatisfied();
        if (sale.length === 0){
            res.status(404).json([]);
        }else{
        res.json(sale);
        }
    } catch (error) {
        res.status(500).json([]);
    }
});

router.get('/customers/:email', async (req, res) => {
    const email = req.params.email;
    console.log("get sale by email of customer " + email);

    try {
        let sale = await controller.getSaleByEmail(email);
        if (!sale){
            res.status(404).json({});
        }else{
        res.json(sale);
        }
    } catch (error) {
        res.status(500).json({});
    }
});

router.get('/locations/:location', async (req, res) => {
    const location = req.params.location;
    console.log("get total of " + location);
    try {
        let sale = await controller.getSalesByLocation(location);
        if (sale.length === 0){
            res.status(404).json([]);
        }else{
        res.json(sale);
        }
    } catch (error) {
        res.status(500).json([]);
    }
});

module.exports = router;