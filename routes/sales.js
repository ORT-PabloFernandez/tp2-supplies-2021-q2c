const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    if(req.query.purchaseMethod){
        res.json(await controller.getSaleByPurchaseMethod(req.query.purchaseMethod));
    }
    else if(req.query.email){
        res.json(await controller.getSaleByEmail(req.query.email));
    }
    else if(req.query.location){
        const TOTAL= await controller.getTotalPerLocation(req.query.location)
        res.send(`El importe total de ${req.query.location} es de ${TOTAL}`);
    }
    else{
        res.json(await controller.getSales());
    }
});

router.get('/lowSatisfaction', async (req, res) => {
    console.log("check");
    res.json(await controller.getSaleBySatisfaction(req.query.satisfaction));
});

router.get('/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSale(req.params.id));
});

module.exports = router;