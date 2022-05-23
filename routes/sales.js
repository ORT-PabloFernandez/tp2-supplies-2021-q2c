const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get('/:id', async (req, res) => {
    console.log("Getting sale by id: " + req.params.id);
    res.json(await controller.getSale(req.params.id));
})

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod)
router.get('/method/:method', async (req, res) => {
    console.log("Getting sale by PurchaseMethod: " + req.params.method);
    res.json(await controller.getSalesByMethod(req.params.method));
})

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente **customner** por email
router.get('/customer/:email', async (req, res) => {
    console.log("Getting customer sales by email: " + req.params.email)
    res.json(await controller.getSalesForEmail(req.params.email));
})

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción)
//Lo coloque como constante, por si se requiere modificar la escala en algun momento
router.get('/customers/dissatisfied', async (req, res) => {
    const value = 3;
    console.log("Getting dissatisfied customers with value less than " + value)
    res.json(await controller.getDissatisfiedCustomers(value));
})

// 5. Generar un endpoint para obtener el importe total de la venta por **localizacion**
// Me trael problemas el $ en la key $numberDecimal VER metodo getTotalImportBylocation de data->supplies
router.get('/import/:location', async (req, res) => {
    console.log("Total by " + req.params.location);
    res.json(await controller.getTotalImportByLocation(req.params.location));
})

module.exports = router;