const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const ProfileReview = require("../Models/ProfileReview.js");

const GetAll = async (req, res) => {
  try {
    const ProfileReviews = await ProfileReview.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: ProfileReviews,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING ProfileReviews : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.ProfileReviewId;
    const ProfileReview = await ProfileReview.findOne({
      where: {
        ProfileReviewId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: ProfileReview,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING ProfileReview : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await ProfileReview.create(req.body);
    res.status(200).json({
      success: 1,
      message: "ProfileReview Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING ProfileReview : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.ProfileReviewId;
    await ProfileReview.update(req.body, {
      where: {
        ProfileReviewId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "ProfileReview updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING ProfileReview : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await ProfileReview.update(
      {
        Deleted: 1,
      },
      {
        where: {
          ProfileReviewId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "ProfileReview DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING ProfileReview : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
