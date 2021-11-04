const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');


// 02 - Ventas filtradas por el metodo de compra (purchaseMethod)
router.get('/', async (req, res) => {    
    if(req.query.purchaseMethod){
        const criteria = req.query.purchaseMethod;        
        console.log(`get sale by purchaseMethod: ${criteria}`);
        const data = await controller.getSales();
        const results = data.filter(sale=>sale.purchaseMethod == criteria);
        if(results.length != 0){            
            res.json(results);
        }else{
            res.status(404);
            res.send('<h1>404</h1><p>No sales with that purchase method</p>');
        }
    }else{ 
        console.log('get all sales');
        res.json(await controller.getSales());
    }
});


// 4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
router.get('/insatisfaction/',async (req,res)=>{
    console.log(`get customers satisfaction less than 3`);
        const data = await controller.getSales();
        const results = data.filter(sale=>sale.customer.satisfaction < 3);
        if(results.length != 0){            
            res.json(results);
        }else{
            res.status(404);
            res.send('<h1>404</h1><p>No customers with a satisfaction below 3</p>');
        }
});
// > 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
// No me salió el reduce :(
// router.get('/locationTotal/:loc',async (req,res)=>{
//     if(req.params.loc){
//         const criteria = req.params.loc;
//         console.log(`get total by location: ${criteria}`);
//         const data = await controller.getSales();
//         const results = data
//             .filter(sale=>sale.storeLocation == criteria);
//         const total = results.reduce((sum,price) =>{return sum+price},0);
//         if(results){            
//             res.send(`<h1>${total}</h1><br></br><p>Total sales price in ${criteria}</p>`);
//         }else{
//             res.status(404);
//             res.send('<h1>404</h1><br></br><p>Location dont have any purchases</p>');
//         }
//     }else{
//         res.status(400);
//         res.send('<h1>Bad Request</h1><br></br><p>Wrong query</p>');
//     }
// });
router.get('/locationTotal/:loc',async (req,res)=>{
    if(req.params.loc){
        const criteria = req.params.loc;
        console.log(`get total by location: ${criteria}`);
        const data = await controller.getSales();
        const results = data
            .filter(sale=>sale.storeLocation == criteria);
        const monto = total(); 
        function total(){
            let suma = 0;
            for (let i = 0; i<results.length;i++){
                suma = results[i].price;
            }
            return suma;
        };
        console.log(`Total price in ${criteria}: $${monto}` );
        if(monto > 0){ 
                      
            res.send(`<h1>$${monto}</h1><br></br><p>Total sales price in ${criteria}</p>`);
        }else{
            res.status(404);
            res.send( `<h1>Total: $${monto}</h1><br></br><p>Location dont have any purchases</p>`);
        }
    }else{
        res.status(400);
        res.send('<h1>Bad Request</h1><br></br><p>Wrong query</p>');
    }
});

//01 - Obtener venta por ID
router.get('/:id',async (req,res)=>{    
    const id = req.params.id;
    if(id){
        console.log(`get sale by id: ${id}`);
        const data = await controller.getSales();    
        const results = data.find(sale=>sale._id == id)
        if(results){            
            res.json(results);
        }else{
            res.status(404);
            res.send('<h1>404</h1><br></br><p>No sales with provided ID</p>');
        }
    }
});



module.exports = router;