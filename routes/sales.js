const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/metodo', async (req, res) => {
    //obtengo el metodo que viene por url
    let metodo = req.query.metodo

    console.log(req.query);

    //obtengo todas las ventas
    let ventas = await controller.getSales();

    // filtro por el metodo que viene en la url
    let ventasPorMetodo = ventas.filter(function (venta) {
        return venta.purchaseMethod == metodo
    });

    //respondo con las ventas encontradas
    res.status(200).json(ventasPorMetodo);
});

router.get('/:id', async (req, res) => {
    console.log("check");

    // obtengo el id que viene por url
    let id = req.params.id;

    // obtengo todas las ventas
    let sales = await controller.getSales();

    // filtro por el id que viene en la ruta
    let sale = sales.filter(function (sale) {
        return sale._id == id;
    });

    //respondo con la venta encontrada
    res.json(sale);
});

router.get('/clientes/insatisfechos', async (req, res) => {
    console.log("check");

    //obtengo todas las ventas
    let ventas = await controller.getSales();

    let clientes = [];
    //filtro las ventas por el nivel de satisfaccion
    ventas.forEach(function (venta) {
        if (venta.customer.satisfaction < 3) {
            clientes.push(venta.customer);
        }
    });

    //respondo con los clientes insatisfechos
    res.json(clientes);
});


router.get('/clientes/:email', async (req, res) => {
    console.log("check");

    // obtengo el mail que viene por parametro
    let email = req.params.email;

    //obtengo todas las ventas
    let ventas = await controller.getSales();

    //filtro las ventas por el mail del cliente
    let venta = ventas.filter(function (venta) {
        return venta.customer.email === email;
    })

    //respondo con la venta encontrada
    res.json(venta);
});

module.exports = router;