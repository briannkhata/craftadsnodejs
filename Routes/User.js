const { Router } = require("express");
const controller = require("../Controllers/User.js");

const User = Router();

User.get("/getALl/", controller.GetAll);
User.get("/getById/:id", controller.GetById);
User.post("/add/", controller.Add);
User.put("/delete/:id", controller.Remove);
User.put("/update/", controller.Update);
User.put("/updateProfile/", controller.UpdateProfile);

module.exports = User;
