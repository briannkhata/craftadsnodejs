const { Router } = require("express");
const controller = require("../Controllers/Register.js");

const Register = Router();

Register.post("/", controller.Register);
//Register.get("/getLocationRegion/", controller.getLocationRegion);

module.exports = Register;
