const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Category = require("../Models/Category.js");

const GetAll = async (req, res) => {
  try {
    const categories = await Category.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: categories,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Categories : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.CategoryId;
    const category = await Category.findOne({
      where: {
        CategoryId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: category,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Category : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Category.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Category Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Category : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.CategoryId;
    await Category.update(req.body, {
      where: {
        CategoryId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Category updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Category : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Category.update(
      {
        Deleted: 1,
      },
      {
        where: {
          CategoryId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Category DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Category : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
