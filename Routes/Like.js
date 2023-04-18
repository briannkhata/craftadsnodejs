const { Router } = require("express");
const controller = require("../Controllers/Like.js");

const Like = Router();

Like.get("/getALl/", controller.GetAll);
Like.get("/getById/:id", controller.GetById);
Like.post("/add/", controller.Add);
Like.put("/delete/:id", controller.Remove);
Like.put("/update/", controller.Update);

module.exports = Like;
