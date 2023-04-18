const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Like = require("../Models/Like.js");

const GetAll = async (req, res) => {
  try {
    const Likes = await Like.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: Likes,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Likes : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.LikeId;
    const Like = await Like.findOne({
      where: {
        LikeId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Like,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Like : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Like.create(req.body);
    res.status(200).json({
      success: 1,
      message: "User Liked Successfully",
    });
  } catch (err) {
    res.status(500).json({ success: 0, message: `Error likinf User : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.LikeId;
    await Like.update(req.body, {
      where: {
        LikeId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "User liked SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Like : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Like.update(
      {
        Deleted: 1,
      },
      {
        where: {
          LikeId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Like DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Like : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
