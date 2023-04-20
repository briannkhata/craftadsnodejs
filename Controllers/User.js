require("dotenv").config();
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
const os = require("os");
const request = require("request");
const axios = require("axios");

const GetAll = async (req, res) => {
  try {
    const users = await User.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: users,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Users : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.UserId;
    const User = await User.findOne({
      where: {
        UserId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: User,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING User : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(200).json({
      success: 1,
      message: "User Successfully Added",
    });
  } catch (err) {
    res.status(500).json({ success: 0, message: `Error ADDING User : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.UserId;
    await User.update(req.body, {
      where: {
        UserId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "User updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING User : ${err}` });
  }
};

const UpdateProfile = async (req, res) => {
  try {
    let id = req.body.UserId;
    await User.update(req.body, {
      where: {
        UserId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Profle updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING profile : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await User.update(
      {
        Deleted: 1,
      },
      {
        where: {
          UserId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "User DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING User : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  UpdateProfile,
  Remove,
};
