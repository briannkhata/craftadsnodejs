const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Payment = require("../Models/Payment.js");

const GetAll = async (req, res) => {
  try {
    const payments = await Payment.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: payments,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Payments : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.PaymentId;
    const Payment = await Payment.findOne({
      where: {
        PaymentId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Payment,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Payment : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Payment.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Payment Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Payment : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.PaymentId;
    await Payment.update(req.body, {
      where: {
        PaymentId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Payment updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Payment : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Payment.update(
      {
        Deleted: 1,
      },
      {
        where: {
          PaymentId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Payment DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Payment : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
