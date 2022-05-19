const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    if(req.query.method){
       res.json(await controller.getSaleForMethod(req.query.method));
    }else{
       res.json(await controller.getSales());
    }
});

router.get('/:id', async (req, res) => {
    console.log("checkForId");
    res.json(await controller.getSale(req.params.id));
});



module.exports = router;