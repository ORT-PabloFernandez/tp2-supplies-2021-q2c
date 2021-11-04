const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");

  try {
    res.json(await controller.getSales());
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/filter", async (req, res) => {
  console.log("check filtered");
  try {
    res.json(
      await controller.getSalesFiltered(
        req.query.purchaseMethod,
        req.query.email
      )
    );
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/customers", async (req, res) => {
  console.log("check get by customer");
  try {
    res.json(await controller.getUnsatisfiedCustomers());
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/total/location", async (req, res) => {
  console.log("check totals");
  try {
    res.json(await controller.getTotalsByLocation());
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/:id", async (req, res) => {
  console.log("check get by id");
  try {
    res.json(await controller.getSaleById(req.params.id));
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
