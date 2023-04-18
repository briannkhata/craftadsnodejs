const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Image = sequelize.define(
  "Image",
  {
    ImageId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    tableName: "Images",
  }
);

module.exports = Image;
