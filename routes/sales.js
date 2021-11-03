const express = require('express');
const router = express.Router();
const controller = require('../controllers/sales');

router.get('/', async (req, res) => {
    console.log("check");
    res.json(await controller.getSales());
});

router.get('/:id', async (req, res) => {
    let id = req.params.id;

    try {
        let sale = await controller.getSaleById(id);
        sale ? res.json(sale) : res.status(404).json({});
    } catch (error) {
        return res.status(500).json({});
    }
});

module.exports = router;