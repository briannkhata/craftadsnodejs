const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const ProfileView = sequelize.define(
  "ProfileView",
  {
    ProfileViewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    DateViewed: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "ProfileViews",
  }
);

module.exports = ProfileView;
