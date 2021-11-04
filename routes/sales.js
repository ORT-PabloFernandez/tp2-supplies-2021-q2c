const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

 router.get('/', async (req, res) => {
    console.log("check");
    if(req.query.purchaseMethod){
        let purchaseMethod = req.query.purchaseMethod;
        let sales = await controller.getSalesByPurchaseMethod(purchaseMethod);
        res.json(sales);
    }
    else{
        res.json(await controller.getSales());
    }
}); 

router.get('/customer/:email',async(req, res,)=>{
        const email = req.params.email;
        let sales = await controller.getSalesByCustomner(email);
        res.json(sales);
        res.end(); 
    });

router.get('/customer/dissatisfied',async(req, res,)=>{
    console.log('CLIENTES INSATISFECHOS');
    let sales = await controller.getSales();
    res.json(sales.filter(sale => sale.customer.satisfaction < 3));
    res.end(); 
});

router.get('/:id',async(req, res,)=>{
    try {
        console.log('BUSCANDO POR ID');
        const id = req.params.id; 
        let sale = await controller.getSaleById(id);
        res.json(sale); 
        res.end(); 
        
    } catch (error) {
        console.log(error.message);
    }
});


module.exports = router;