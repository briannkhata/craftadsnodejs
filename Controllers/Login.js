const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");
const User = require("../Models/User.js");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");
const sessions = require("express-session");

const oneDay = 1000 * 60 * 60 * 24;
app.use(
  sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneDay },
    resave: false,
  })
);

var session;

const Login = async (req, res) => {
  session = req.session;

  if (session.userid) {
    console.log("Already Logged In");
  } else {
    try {
      const { Phone, Password } = req.body;
      const findUser = await User.findOne({ where: { Phone } }).catch((err) => {
        console.log("Error :", err);
      });
      if (!findUser) {
        return res.json({
          success: 0,
          message: "Phone or Password does not match!",
        });
      }

      if (findUser.Password !== Password) {
        return res.json({
          success: 0,
          message: "Phone or Password does not match!",
        });
      }

      // const jwtToken = jwt.sign(
      //   { id: userPhone.id, Phone: userPhone.Phone },
      //   process.env.JWT_SECRET
      // );

      session = req.session;
      session.Id = findUser.Phone;
      session.Email = findUser.Email;
      session.Name = findUser.Name;

      res.json({ success: 1, message: `Welcome Back ${sequelize.Name} !` });
    } catch (err) {
      res.status(500).json({ success: 0, message: `Error Logging in  ${err}` });
    }
  }
};

module.exports = { Login };
