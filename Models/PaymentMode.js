const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const PaymentMode = sequelize.define(
  "PaymentMode",
  {
    PaymentModeId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PaymentMode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Details: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    CountryCode: {
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
    tableName: "PaymentModes",
  }
);

module.exports = PaymentMode;
