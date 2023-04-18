const { Router } = require("express");
const controller = require("../Controllers/Skill.js");

const Skill = Router();

Skill.get("/getALl/", controller.GetAll);
Skill.get("/getById/:id", controller.GetById);
Skill.post("/add/", controller.Add);
Skill.put("/delete/:id", controller.Remove);
Skill.put("/update/", controller.Update);

module.exports = Skill;
