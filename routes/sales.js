const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/sale/:id', async (req, res) => {
    const id = req.params.id;
    const sale = await controller.getSaleById(id)
    res.status(200).json(sale);
})

router.get('/method', async (req, res) => {
    const method = req.query.method
    if(method){
        const sales = await controller.getSalesByMethod(method);
        res.status(200).json(sales);
    }else{
        res.status(400).send('Method value must be provided');
    }

})

router.get('/custommer', async(req, res) => {
    const email = req.query.email
    if(email){
        const sales = await controller.getSalesForCustommer(email);
        res.status(200).json(sales);
    }else{
        res.status(400).send('Email value must be provided');
    }
    
})

module.exports = router;