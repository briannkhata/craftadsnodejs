const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const Setting = sequelize.define(
  "Setting",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    App: {
      type: DataTypes.TEXT,
    },
    Address: {
      type: DataTypes.TEXT,
    },

    Facebook: {
      type: DataTypes.TEXT,
    },
    Twitter: {
      type: DataTypes.TEXT,
    },

    LinkedIn: {
      type: DataTypes.TEXT,
    },
    Instagram: {
      type: DataTypes.TEXT,
    },
    Accountduration: {
      type: DataTypes.INTEGER,
    },
    JoiningFee: {
      type: DataTypes.INTEGER,
    },
    RatingFee: {
      type: DataTypes.INTEGER,
    },
    ConfirmationFee: {
      type: DataTypes.INTEGER,
    },

    TrialDuration: {
      type: DataTypes.INTEGER,
    },

    Email: {
      type: DataTypes.TEXT,
    },

    Phone: {
      type: DataTypes.TEXT,
    },
  },
  {
    tableName: "Settings",
  }
);

module.exports = Setting;
