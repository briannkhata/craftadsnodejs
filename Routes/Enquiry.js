const { Router } = require("express");
const controller = require("../Controllers/Enquiry.js");

const Enquiry = Router();

Enquiry.get("/getALl/", controller.GetAll);
Enquiry.get("/getById/:id", controller.GetById);
Enquiry.post("/add/", controller.Add);
Enquiry.put("/delete/:id", controller.Remove);
Enquiry.put("/update/", controller.Update);

module.exports = Enquiry;
