const { Router } = require("express");
const controller = require("../Controllers/Payment.js");

const Payment = Router();

Payment.get("/getALl/", controller.GetAll);
Payment.get("/getById/:id", controller.GetById);
Payment.post("/add/", controller.Add);
Payment.put("/delete/:id", controller.Remove);
Payment.put("/update/", controller.Update);

module.exports = Payment;
