const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const Payment = sequelize.define(
  "Payment",
  {
    PaymentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    PaymentCode: {
      type: DataTypes.TEXT,
    },
    PaymentAmount: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    PaymentDescription: {
      type: DataTypes.TEXT,
    },
    PaymentDate: {
      type: DataTypes.DATE,
      defaultValue: function () {
        return new Date();
      },
    },
    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "Payments",
  }
);

module.exports = Payment;
