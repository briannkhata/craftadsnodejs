const { Sequelize } = require("sequelize");
const sequelize = require("./database.js");
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

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database synchronized successfully.");
  })
  .catch((err) => {
    console.error("Unable to synchronize database:", err);
  })
  .finally(() => {
    sequelize.close();
  });
