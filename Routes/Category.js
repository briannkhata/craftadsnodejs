const { Router } = require("express");
const controller = require("../Controllers/Category.js");

const Category = Router();

Category.get("/getALl/", controller.GetAll);
Category.get("/getById/:id", controller.GetById);
Category.post("/add/", controller.Add);
Category.put("/delete/:id", controller.Remove);
Category.put("/update/", controller.Update);

module.exports = Category;
