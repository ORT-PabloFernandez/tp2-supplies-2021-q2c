const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');
const { getSalesByLocation } = require('../data/supplies');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

// 1. Necesitamos un endpoint que nos devuelva una venta particular por _id

router.get('/:id', async (req, res) => {
    console.log("check");
    res.json(await controller.getSalesById(req.params.id));
});

// 2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod), que pueden ser: Phone, Online, In store... 

router.get('/', async(req, res) => {
    console.log("check");
    res.json(await controller.getSales());

    const datos = await controller.getSales()
    if(!req.query.purchaseMethod){
        return res.json(datos);
    }

    res.json(datos.filter(sale=> sale.purchaseMethod == req.query.purchaseMethod))
});

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
router.get('/customer/:email', async(req, res) => {
    console.log("check");
    const datos = await controller.getSales()

    res.json(await datos.filer(sale=> sale.customer.email == req.params.email));
});

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
router.get('/customer/satistfaction/:level', async(req, res) => {
    console.log("check");
    const datos = await controller.getSales()

    res.json(await datos.filer(sale=> sale.customer.satisfaction < req.params.level));
});

//5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
router.get("/totals/:location", async (req, res) => {
       res.json(await controller.getSalesByLocation(req.params.location));
});

module.exports = router;