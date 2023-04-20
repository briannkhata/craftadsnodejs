const { Router } = require("express");
const controller = require("../Controllers/Category.js");
const passport = require("passport");

const Category = Router();

Category.get(
  "/getALl/",
  //passport.authenticate("jwt", { session: false }),
  controller.GetAll
);
Category.get(
  "/getById/:id",
  // passport.authenticate("jwt", { session: false }),
  controller.GetById
);
Category.post(
  "/add/",
  //passport.authenticate("jwt", { session: false }),
  controller.Add
);
Category.put(
  "/delete/:id",
  // passport.authenticate("jwt", { session: false }),
  controller.Remove
);
Category.put(
  "/update/",
  // passport.authenticate("jwt", { session: false }),
  controller.Update
);

module.exports = Category;
