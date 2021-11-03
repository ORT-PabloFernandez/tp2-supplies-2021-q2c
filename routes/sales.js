const express = require('express');
const { NotFound, RangeNotSatisfiable } = require('http-errors');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    try {
        res.json(await controller.getSaleById(req.params.id));
    } catch(error) {
        if (error instanceof NotFound) {
            res.status(404).json({message: error.message});
        }
        throw error;
    }
});

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

module.exports = router;