const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  " postgres://craftads:Epd2o4vBCauEqgv8VaWAdssIDVteYvk4@dpg-ch0fsob3cv2c5b44ralg-a/craftads"
  // database: "craftads",
  // username: "craftads",
  // password: "Epd2o4vBCauEqgv8VaWAdssIDVteYvk4",
  // host: "",
  // port: "5432",
  // dialect: "postgres",
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
