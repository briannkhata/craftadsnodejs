const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const Login = async (req, res) => {
  try {
    const { Phone, Password } = req.body;
    const userPhone = await User.findOne({ where: { Phone } }).catch((err) => {
      console.log("Error :", err);
    });
    if (!userPhone) {
      return res.json({
        success: 0,
        message: "Phone or Password does not match!",
      });
    }

    if (userPhone.Password !== Password) {
      return res.json({
        success: 0,
        message: "Phone or Password does not match!",
      });
    }

    const jwtToken = jwt.sign(
      { id: userPhone.id, Phone: userPhone.Phone },
      process.env.JWT_SECRET
    );

    res.json({ success: 1, message: "Welcome Back!", token: jwtToken });
  } catch (err) {
    res.status(500).json({ success: 0, message: `Error Logging in  ${err}` });
  }
};

module.exports = { Login };
