const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Referal = require("../Models/Referal.js");

const GetAll = async (req, res) => {
  try {
    const referals = await Referal.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: referals,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Referals : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.ReferalId;
    const Referal = await Referal.findOne({
      where: {
        ReferalId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Referal,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Referal : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Referal.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Referal Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Referal : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.ReferalId;
    await Referal.update(req.body, {
      where: {
        ReferalId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Referal updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Referal : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Referal.update(
      {
        Deleted: 1,
      },
      {
        where: {
          ReferalId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Referal DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Referal : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
