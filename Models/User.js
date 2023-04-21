const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../database/database.js");

const User = sequelize.define(
  "User",
  {
    UserId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Phone: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    Email: {
      type: DataTypes.TEXT,
    },

    Details: {
      type: DataTypes.TEXT,
    },

    Role: {
      type: DataTypes.INTEGER,
    },

    Address: {
      type: DataTypes.TEXT,
    },
    DateJoined: {
      type: DataTypes.DATE,
      defaultValue: function () {
        return new Date();
      },
    },
    Facebook: {
      type: DataTypes.TEXT,
    },
    Twitter: {
      type: DataTypes.TEXT,
    },
    Instagram: {
      type: DataTypes.TEXT,
    },
    LinkedIn: {
      type: DataTypes.TEXT,
    },
    Featured: {
      type: DataTypes.INTEGER,
    },
    Tagline: {
      type: DataTypes.TEXT,
    },
    Profession: {
      type: DataTypes.TEXT,
    },
    PaymentCode: {
      type: DataTypes.TEXT,
    },
    PaymentAmount: {
      type: DataTypes.DOUBLE,
    },
    StartPrice: {
      type: DataTypes.DOUBLE,
    },

    ExactLocation: {
      type: DataTypes.TEXT,
    },

    Country: {
      type: DataTypes.TEXT,
    },
    City: {
      type: DataTypes.TEXT,
    },
    CountryCode: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    CountryCallingCode: {
      type: DataTypes.TEXT,
    },
    Region: {
      type: DataTypes.TEXT,
    },
    RegionCode: {
      type: DataTypes.TEXT,
    },
    Terms: {
      type: DataTypes.INTEGER,
    },
    Confirmed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Rated: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    Trial: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    TrialEndDate: {
      type: DataTypes.DATE,
    },
    NoImages: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 3,
    },

    Deleted: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },
  {
    tableName: "Users",
  }
);

module.exports = User;
