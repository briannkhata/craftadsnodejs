const { Router } = require("express");
const controller = require("../Controllers/Login.js");

const Login = Router();

Login.post("/", controller.Login);

module.exports = Login;
