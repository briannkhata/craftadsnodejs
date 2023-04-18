const { Router } = require("express");
const controller = require("../Controllers/Testimony.js");

const Testimony = Router();

Testimony.get("/getALl/", controller.GetAll);
Testimony.get("/getById/:id", controller.GetById);
Testimony.post("/add/", controller.Add);
Testimony.put("/delete/:id", controller.Remove);
Testimony.put("/update/", controller.Update);

module.exports = Testimony;
