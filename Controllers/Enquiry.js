const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const Enquiry = require("../Models/Enquiry.js");

const GetAll = async (req, res) => {
  try {
    const Enquirys = await Enquiry.findAll();
    res.status(200).json({
      success: 1,
      data: Enquirys,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Enquirys : ${err}` });
  }
};

const GetById = async (req, res) => {
  try {
    let id = req.body.EnquiryId;
    const Enquiry = await Enquiry.findOne({
      where: {
        EnquiryId: id,
      },
    });
    res.status(200).json({
      success: 1,
      data: Enquiry,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error GETTING Enquiry : ${err}` });
  }
};

const Add = async (req, res) => {
  try {
    await Enquiry.create(req.body);
    res.status(200).json({
      success: 1,
      message: "Enquiry Successfully Added",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error ADDING Enquiry : ${err}` });
  }
};

const Update = async (req, res) => {
  try {
    let id = req.body.EnquiryId;
    await Enquiry.update(req.body, {
      where: {
        EnquiryId: id,
      },
    });
    res.status(200).json({
      success: 1,
      message: "Enquiry updated SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error UPDATING Enquiry : ${err}` });
  }
};

const Remove = async (req, res) => {
  try {
    let id = req.params.id;
    await Enquiry.update(
      {
        Deleted: 1,
      },
      {
        where: {
          EnquiryId: id,
        },
      }
    );
    res.status(200).json({
      success: 1,
      message: "Enquiry DELETED SuccessfullY",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error DELETING Enquiry : ${err}` });
  }
};

module.exports = {
  GetAll,
  GetById,
  Add,
  Update,
  Remove,
};
