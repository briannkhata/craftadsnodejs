const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const Skill = sequelize.define(
  "Skill",
  {
    SkillId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Skill: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Rate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "Skills",
  }
);

module.exports = Skill;
