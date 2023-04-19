const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
const os = require("os");
const request = require("request");
const axios = require("axios");
require("dotenv").config();

const GetAll = async (req, res) => {
  try {
    const Users = await User.findAll({
      where: {
        Deleted: 0,
      },
    });
    res.status(200).json({
      success: 1,
      data: Users,
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

const getLocation = async (req, res) => {
  const hostname = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://api.ipdata.co/${hostname}`, {
      params: {
        "api-key": process.env.IP_DATA,
      },
    });
    return json(response.data);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
};

const Register = async (req, res) => {
  const getCurrency = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { currency } = response.data;
      return currency;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getCountry = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { country_name } = response.data;
      return country_name;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getCountryCode = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { country_code } = response.data;
      return country_code;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getRegion = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { region } = response.data;
      return region;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getRegionCode = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { region_code } = response.data;
      return region_code;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getCity = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { city } = response.data;
      return city;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  try {
    const { Phone } = req.body;
    const alreadyExists = await User.findOne({ where: { Phone } }).catch(
      (err) => {
        console.log("Error :", err);
      }
    );

    if (alreadyExists) {
      return res.status(500).json({
        success: 0,
        message: "PHONE ALEADY EXISTS..!",
      });
    }

    await User.create(req.body);
    res.status(200).json({
      success: 1,
      message:
        "ACCOUNT CREATED successfully..! Please Login and Update profile",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error CREATING ACCOUNT : ${err}` });
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
  getLocation,
  Register,
  Update,
  UpdateProfile,
  Remove,
};
