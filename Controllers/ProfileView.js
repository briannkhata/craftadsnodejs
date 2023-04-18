const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const ProfileView = require("../Models/ProfileView.js");

const GetAll = async (req, res) => {
  try {
    const ProfileViews = await ProfileView.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: ProfileViews,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING ProfileViews : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.ProfileViewId;
    const ProfileView = await ProfileView.findOne({
      where: {
        ProfileViewId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: ProfileView,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING ProfileView : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await ProfileView.create(req.body);
    res.status(200).json({
      success: 1,
      message: "ProfileView Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING ProfileView : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.ProfileViewId;
    await ProfileView.update(req.body, {
      where: {
        ProfileViewId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "ProfileView updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING ProfileView : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await ProfileView.update(
      {
        Deleted: 1,
      },
      {
        where: {
          ProfileViewId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "ProfileView DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING ProfileView : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
