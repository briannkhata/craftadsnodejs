const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Referal = sequelize.define(
  "Referal",
  {
    ReferalId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Referal: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Job_done: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "Referals",
  }
);

module.exports = Referal;
