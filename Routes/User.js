const { Router } = require("express");
const controller = require("../Controllers/User.js");

const User = Router();

User.get("/getALl/", controller.GetAll);
User.get("/getById/:id", controller.GetById);
User.post("/add/", controller.Add);
User.put("/delete/:id", controller.Remove);
User.put("/update/", controller.Update);
User.post("/register/", controller.Register);
User.put("/updateProfile/", controller.UpdateProfile);
//User.get("/getLocation/", controller.getLocation);

module.exports = User;
