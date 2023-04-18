const { Router } = require("express");
const controller = require("../Controllers/Referal.js");

const Referal = Router();

Referal.get("/getALl/", controller.GetAll);
Referal.get("/getById/:id", controller.GetById);
Referal.post("/add/", controller.Add);
Referal.put("/delete/:id", controller.Remove);
Referal.put("/update/", controller.Update);

module.exports = Referal;
