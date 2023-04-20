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

// (async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// })();

(async () => {
  let retries = 5;

  while (retries > 0) {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");

      const results = await sequelize.query("SELECT * FROM users");
      console.log(results);

      break; // Exit the loop if successful
    } catch (error) {
      console.error("Unable to connect to the database:", error);

      retries--; // Decrement retries counter
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds before retrying
    }
  }
})();

module.exports = sequelize;
