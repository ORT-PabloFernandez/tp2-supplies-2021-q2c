const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req,res) => {
    try{
        res.json(await controller.getSalebyId((req.params.id)))    
    } catch (err){
        res.status(500).send(err)
        console.log(err)
    }

});

router.get('/method/:method', async (req,res) => {
    try{
        res.json(await controller.getSaleByPurchaseMethod(req.params.method))
    } catch (err){
        res.status(500).send(err)
    }
});

router.get('/email/:email', async (req,res) => {
    try{
        res.json(await controller.getSaleByBuyerEmail(req.params.email))
    } catch (err){
        res.status(500).send(err)
    }
});

router.get('/clientSatisfaction', async(req,res) => {
    try{
        res.json(await controller.getClientBySatisfaction())
    } catch (err){
        res.status(500).send(err)
    }
})

router.get('/total/location/:location', async (req,res) => {
    try{
        res.json(await controller.getTotalSalesAmountByLocation(req.params.location))
    } catch (err){
        res.status(500).send(err)
    } 
});


module.exports = router;