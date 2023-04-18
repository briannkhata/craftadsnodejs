const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const Like = sequelize.define(
  "Like",
  {
    LikeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Action: {
      type: DataTypes.TEXT,
    },
    ActionDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "Likes",
  }
);

module.exports = Like;
