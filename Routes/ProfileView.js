const { Router } = require("express");
const controller = require("../Controllers/ProfileView.js");

const ProfileView = Router();

ProfileView.get("/getALl/", controller.GetAll);
ProfileView.get("/getById/:id", controller.GetById);
ProfileView.post("/add/", controller.Add);
ProfileView.put("/delete/:id", controller.Remove);
ProfileView.put("/update/", controller.Update);

module.exports = ProfileView;
