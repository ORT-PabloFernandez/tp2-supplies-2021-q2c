const express = require("express");
const router = express.Router();
const controller = require("../controllers/sales");

router.get("/", async (req, res) => {
  console.log("check");
  res.json(await controller.getSales());
});

//1. Necesitamos un endpoint que nos devuelva una venta particular por _id
router.get("/:id", async (req, res) => {
  const sale = await controller.getSale(req.params.id);
  res.json(sale);
});

//2. Necesitamos un endpoint que nos permita listar las ventas filtradas por el metodo de compra (purchaseMethod),
//   que pueden ser: Phone, Online, In store...
router.get("/purchaseMethod/:purchaseMethod", async (req, res) => {
  const sales = await controller.getSalesByPurchaseMethod(
    req.params.purchaseMethod
  );
  res.json(sales);
});

//3. Necesitamos un endpoint que nos devuelva las compras de un cliente customer por email
router.get("/byEmail/:email", async (req, res) => {
  const sales = await controller.getSalesByEmail(req.params.email);
  res.json(sales);
});

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción) VERSION OK
router.get("/unsatisfied", async (req, res) => {
  const customers = await controller.getUnsatisfiedCustomers();
  res.json(customers);
});

//4. Necesitamos encontrar los clientes insatisfechos (con menor a 3 de satisfacción) //NO FUNCIONA
// router.get("/unsatisfied/:satisfaction", async (req, res) => {
//   const customers = await controller.getUnsatisfiedCustomersWithParams(
//     req.params.satisfaction
//   );
//   res.json(customers);
// });

//5. Generar un endpoint para obtener el importe total de la venta por localizacion // NO FUNCIONA
router.get("/importeTotal/:storeLocation", async (req, res) => {
  const total = await controller.getImporteTotal(req.params.storeLocation);
  res.json(total);
});

module.exports = router;
