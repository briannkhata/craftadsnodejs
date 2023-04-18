const { Router } = require("express");
const controller = require("../Controllers/ProfileReview.js");

const ProfileReview = Router();

ProfileReview.get("/getALl/", controller.GetAll);
ProfileReview.get("/getById/:id", controller.GetById);
ProfileReview.post("/add/", controller.Add);
ProfileReview.put("/delete/:id", controller.Remove);
ProfileReview.put("/update/", controller.Update);

module.exports = ProfileReview;
