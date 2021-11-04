const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

router.get("/sale/:id", async (req, res) => {
  const saleId = req.params.id;
  res.json(await controller.getSaleById(saleId));
});

router.get("/filter", async (req, res) => {
  const method = req.query.purchasedMethod;
  res.json(await controller.getSalesByPurchaseMethod(method));
});

router.get("/customer/:email", async (req, res) => {
  const customerEmail = req.params.email;
  res.json(await controller.getSalesByCustomerEmail(customerEmail));
});

router.get("/unsatisfiedCustomers", async (req, res) => {
  res.json(await controller.getUnsatisfiedCustomers());
});

router.get("/total/:storeLocation", async (req, res) => {
  const location = req.params.storeLocation;
  res.json(await controller.getSalesTotalByStoreLocation(location));
});

module.exports = router;
