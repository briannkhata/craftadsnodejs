const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const Enquiry = sequelize.define(
  "Enquiry",
  {
    EnquiryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Enquiry: {
      type: DataTypes.TEXT,
    },

    Name: {
      type: DataTypes.TEXT,
    },

    Email: {
      type: DataTypes.TEXT,
    },

    Phone: {
      type: DataTypes.TEXT,
    },

    EnquiryDate: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "Enquiries",
  }
);

module.exports = Enquiry;
