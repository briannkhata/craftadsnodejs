const { Sequelize, DataTypes, DATE } = require("sequelize");
const sequelize = require("../database/database.js");

const ProfileReview = sequelize.define(
  "ProfileReview",
  {
    ProfileReviewId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    Review: {
      type: DataTypes.TEXT,
    },

    ReviewedBy: {
      type: DataTypes.TEXT,
    },

    DateReviewed: {
      type: DataTypes.DATE,
      defaultValue: new Date(),
    },
  },
  {
    tableName: "ProfileReviews",
  }
);

module.exports = ProfileReview;
