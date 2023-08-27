const express = require("express");
const {
  loginController,
  registerController,
  eventController,
} = require("../controllers");
const router = express.Router();

router.post("/login", loginController.login);

router.post("/register", registerController.register);

router.post("/otp", registerController.otp);

router.post("/adduniversityinfo", registerController.universityinfo);

router.post("/createevent", eventController.createEvent);

router.post("/manageevent", eventController.fetchEvent);

router.get("/getallevents", eventController.fetchallEvent);

module.exports = router;
