const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const PaymentMode = require("../Models/PaymentMode.js");

const GetAll = async (req, res) => {
  try {
    const PaymentModes = await PaymentMode.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: PaymentModes,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING PaymentModes : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.PaymentModeId;
    const PaymentMode = await PaymentMode.findOne({
      where: {
        PaymentModeId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: PaymentMode,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING PaymentMode : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await PaymentMode.create(req.body);
    res.status(200).json({
      success: 1,
      message: "PaymentMode Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING PaymentMode : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.PaymentModeId;
    await PaymentMode.update(req.body, {
      where: {
        PaymentModeId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "PaymentMode updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING PaymentMode : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await PaymentMode.update(
      {
        Deleted: 1,
      },
      {
        where: {
          PaymentModeId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "PaymentMode DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING PaymentMode : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
