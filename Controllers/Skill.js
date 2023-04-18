const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Skill = require("../Models/Skill.js");

const GetAll = async (req, res) => {
  try {
    const skills = await Skill.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: skills,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING skills : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.SkillId;
    const Skill = await Skill.findOne({
      where: {
        SkillId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Skill,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Skill : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Skill.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Skill Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Skill : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.SkillId;
    await Skill.update(req.body, {
      where: {
        SkillId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Skill updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Skill : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Skill.update(
      {
        Deleted: 1,
      },
      {
        where: {
          SkillId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Skill DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Skill : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
