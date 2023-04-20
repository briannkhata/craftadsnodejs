const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
const os = require("os");
const request = require("request");
const axios = require("axios");
const satelize = require("satelize");
require("dotenv").config();

const API_URL = "https://ipapi.co/";
const getLocation = async (req, res) => {
  //const hostname = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

  const hostname = API_URL;

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
      res.send(country_name);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getCountryCode = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { country_code } = response.data;
      console.log(country_code);
      res.send(country_code);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  console.log(getCountryCode);

  const getRegion = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      //const { region } = response.data;
      res.send(response.data.region);
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  const getRegionCode = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      //const { region_code } = response.data;
      res.send(response.data.region_code);
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

  const getCallingCode = async (req, res) => {
    try {
      const response = await getLocation(req, res);
      const { calling_code } = response.data;
      return calling_code;
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  };

  try {
    const { Name, Phone, Email, Password } = req.body;
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

    await User.create({
      Name: Name,
      Phone: Phone,
      Email: Email,
      Password: Password,
      City: getCity,
      Country: getCountry,
      CountryCode: getCountryCode,
      RegionCode: getRegionCode,
      Region: getRegion,
      CountryCallingCode: getCallingCode,
    });
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

module.exports = { Register };
