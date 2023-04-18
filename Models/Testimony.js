const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Testimony = sequelize.define(
  "Testimony",
  {
    TestimonyId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Testimony: {
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
    tableName: "Testimonies",
  }
);

module.exports = Testimony;
