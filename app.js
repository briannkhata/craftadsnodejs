const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./database/database.js");
const User = require("./Models/User.js");
const Category = require("./Models/Category.js");
const Image = require("./Models/Image.js");
const Like = require("./Models/Like.js");
const Payment = require("./Models/Payment.js");
const ProfileReview = require("./Models/ProfileReview.js");
const ProfileView = require("./Models/ProfileView.js");
const Referal = require("./Models/Referal.js");
const Skill = require("./Models/Skill.js");
const Testimony = require("./Models/Testimony.js");
const Setting = require("./Models/Setting.js");
const Enquiry = require("./Models/Enquiry.js");
const PaymentMode = require("./Models/PaymentMode.js");

async function ConnectToDatabase() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
ConnectToDatabase();

const PORT = process.env.PORT || 5000;

//relationships
Category.hasOne(User, {
  foreignKey: "CategoryId",
});

User.hasOne(Testimony, {
  foreignKey: "UserId",
});
User.hasMany(Image, {
  foreignKey: "UserId",
});

User.hasMany(Skill, {
  foreignKey: "UserId",
});

User.hasMany(Like, {
  foreignKey: "UserId",
});

User.hasMany(Referal, {
  foreignKey: "UserId",
});

User.hasMany(Payment, {
  foreignKey: "UserId",
});

User.hasMany(ProfileReview, {
  foreignKey: "UserId",
});

User.hasMany(ProfileView, {
  foreignKey: "UserId",
});
const corsOptions = {
  origin: "http://localhost:7000",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const categoryRoutes = require("./Routes/Category.js");

app.use("/api/v1/category/", categoryRoutes);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
