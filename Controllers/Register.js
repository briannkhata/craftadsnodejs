const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
const os = require("os");
const request = require("request");
const axios = require("axios");
const satelize = require("satelize");
const bcrypt = require("bcrypt");

require("dotenv").config();

//const getLocationRegion = async (req, res) => {
// const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//const ip = req.ip;
//const ip = req.socket.remoteAddress;
//   const ipquoted =
//     req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
//   const ip = ipquoted.slice(1, -1);

//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { region } = response.data;
//     //res.json(ip);
//     res.send(region);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationRegionCode = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { region_code } = response.data;
//     res.send(region_code);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationCountry = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { country_name } = response.data;
//     res.send(country_name);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationCountyCode = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { country } = response.data;
//     res.send(country);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationCurrency = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { currency } = response.data;
//     res.send(currency);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationCallingCode = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { count_calling_code } = response.data;
//     res.send(count_calling_code);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

// const getLocationCity = async (req, res) => {
//   const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//   try {
//     const response = await axios.get(`https://ipapi.co/${ip}/json/`);
//     const { city } = response.data;
//     res.send(city);
//   } catch (error) {
//     res.status(500).send(`${error} : Internal Server Error`);
//   }
// };

const Register = async (req, res) => {
  try {
    const ipquoted =
      req.headers["x-forwarded-for"]?.split(",")[0] || req.socket.remoteAddress;
    const ip = ipquoted.slice(1, -1);

    const response = await axios.get(`https://ipapi.co/${ip}/json/`);
    const {
      city,
      region,
      country_calling_code,
      currency,
      country,
      country_name,
      region_code,
    } = response.data;

    const today = new Date();
    const endTrialDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);

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
      City: city,
      Country: country_name,
      CountryCode: country,
      RegionCode: region_code,
      Region: region,
      CountryCallingCode: country_calling_code,
      TrialEndDate: endTrialDate,
    });
    res.status(200).json({
      success: 1,
      message:
        "ACCOUNT CREATED successfully..! Please LOGIN and UPDATE YOUR profile",
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: 0, message: `Error CREATING ACCOUNT : ${err}` });
  }
};

module.exports = {
  Register,
  // getLocationRegion,
  // getLocationRegionCode,
  // getLocationCountry,
  // getLocationCountyCode,
  // getLocationCallingCode,
  // getLocationCurrency,
  // getLocationCity,
};
