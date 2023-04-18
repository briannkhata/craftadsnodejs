const { Router } = require("express");
const controller = require("../Controllers/PaymentMode.js");

const PaymentMode = Router();

PaymentMode.get("/getALl/", controller.GetAll);
PaymentMode.get("/getById/:id", controller.GetById);
PaymentMode.post("/add/", controller.Add);
PaymentMode.put("/delete/:id", controller.Remove);
PaymentMode.put("/update/", controller.Update);

module.exports = PaymentMode;
