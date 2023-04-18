const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Category = sequelize.define(
  "Category",
  {
    CategoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Category: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    //timestamps: false,
  },
  {
    tableName: "Categories",
  }
);

module.exports = Category;
