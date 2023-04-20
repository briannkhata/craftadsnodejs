const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "postgres://craftads:Epd2o4vBCauEqgv8VaWAdssIDVteYvk4@dpg-ch0fsob3cv2c5b44ralg-a/craftads",
  "postgres",
  "Epd2o4vBCauEqgv8VaWAdssIDVteYvk4",
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

module.exports = sequelize;
