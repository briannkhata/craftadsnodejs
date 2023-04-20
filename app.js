const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("./database/runModels.js");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./database/database.js");
require("./auth/Passport.js");

// const corsOptions = {
//   origin: "http://localhost:7000",
// };

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const categoryRoutes = require("./Routes/Category.js");
const userRoutes = require("./Routes/User.js");
const skillRoutes = require("./Routes/Skill.js");
const paymentRoutes = require("./Routes/Payment.js");
const paymentModeRoutes = require("./Routes/PaymentMode.js");
const referalRoutes = require("./Routes/Referal.js");
const likeRoutes = require("./Routes/Like.js");
const profileViewRoutes = require("./Routes/ProfileView.js");
const profileReviewRoutes = require("./Routes/ProfileReview.js");
const enquiryRoutes = require("./Routes/Enquiry.js");
const loginRoutes = require("./Routes/Login.js");
const registerRoutes = require("./Routes/Register.js");

app.use("/api/v1/login/", loginRoutes);
app.use("/api/v1/register/", registerRoutes);
app.use("/api/v1/category/", categoryRoutes);
app.use("/api/v1/user/", userRoutes);
app.use("/api/v1/skill/", skillRoutes);
app.use("/api/v1/payment/", paymentRoutes);
app.use("/api/v1/paymentMode/", paymentModeRoutes);
app.use("/api/v1/referal/", referalRoutes);
app.use("/api/v1/like/", likeRoutes);
app.use("/api/v1/profileReview/", profileReviewRoutes);
app.use("/api/v1/profileView/", profileViewRoutes);
app.use("/api/v1/enquiry/", enquiryRoutes);

app.listen(PORT, () => {
  console.log(`SERVER RUNNING AT ${PORT}`);
});
