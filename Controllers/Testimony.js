const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Testimony = require("../Models/Testimony.js");

const GetAll = async (req, res) => {
  try {
    const Testimonys = await Testimony.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: Testimonys,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Testimonys : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.TestimonyId;
    const Testimony = await Testimony.findOne({
      where: {
        TestimonyId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Testimony,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Testimony : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Testimony.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Testimony Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Testimony : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.TestimonyId;
    await Testimony.update(req.body, {
      where: {
        TestimonyId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Testimony updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Testimony : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Testimony.update(
      {
        Deleted: 1,
      },
      {
        where: {
          TestimonyId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Testimony DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Testimony : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
