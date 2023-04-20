const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
const os = require("os");
const request = require("request");
const axios = require("axios");
const satelize = require("satelize");
const bcrypt = require("bcrypt");

require("dotenv").config();

const getLocationRegion = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { region } = response.data;
    return region;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationRegionCode = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { region_code } = response.data;
    return region_code;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationCountry = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { country_name } = response.data;
    return country_name;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationCountyCode = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { country } = response.data;
    return country;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationCurrency = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { currency } = response.data;
    return currency;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationCallingCode = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { count_calling_code } = response.data;
    return count_calling_code;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const getLocationCity = async (req, res) => {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { city } = response.data;
    return city;
  } catch (error) {
    res.status(500).send(`${error} : Internal Server Error`);
  }
};

const Register = async (req, res) => {
  try {
    const City = getLocationCity(req, res);
    const Country = getLocationCountry(req, res);
    const CountryCode = getLocationCountyCode(req, res);
    const RegionCode = getLocationRegionCode(req, res);
    const Region = getLocationRegion(req, res);
    const CountryCallingCode = getLocationCallingCode(req, res);

    const { Name, Phone, Email, Password } = req.body;
    const hashedPassword = await bcrypt.hash(Password, 20);

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
      Password: hashedPassword,
      City: City,
      Country: Country,
      CountryCode: CountryCode,
      RegionCode: RegionCode,
      Region: Region,
      CountryCallingCode: CountryCallingCode,
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

module.exports = {
  Register,
  getLocationRegion,
  getLocationRegionCode,
  getLocationCountry,
  getLocationCountyCode,
  getLocationCallingCode,
  getLocationCurrency,
  getLocationCity,
};
