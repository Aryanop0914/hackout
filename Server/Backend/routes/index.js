const express = require("express");
const {
  loginController,
  registerController,
  fetchproduct,
  shippingdetails,
} = require("../controllers");
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

router.post("/adduniversityinfo", registerController.universityinfo);

module.exports = router;
