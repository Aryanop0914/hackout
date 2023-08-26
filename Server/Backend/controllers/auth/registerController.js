const registration = require("../../Schemas/registerSchema.js");
const university = require("../../Schemas/universityinfo.js");
const bcrypt = require("bcrypt");
const sendEmail = require("../../../Emails/Otp.js");

const registerController = {
  async register(req, res, next) {
    const { username, email, password, role } = req.body;
    try {
      const hashedpassword = await bcrypt.hash(password, 10);
      const done = await registration.create({
        username: username,
        email: email,
        password: hashedpassword,
        role: role,
      });
      if (!done) {
        const remove = await university.deleteOne({ email: email });
      }
      res.send(done);
    } catch (e) {
      console.log(e);
    }
  },
  async otp(req, res, next) {
    const { email, otp } = req.body;
    console.log(email, otp);
    sendEmail(email, otp);
    res.json({ msg: "OTP" });
  },
  async universityinfo(req, res, next) {
    const {
      uniname,
      contact,
      address,
      seats,
      city,
      state,
      zip,
      details,
      type,
      email,
    } = req.body;
    try {
      const infodone = await university.create({
        uniname,
        contact,
        address,
        seats,
        city,
        state,
        zip,
        details,
        type,
        email,
      });
      if (infodone) {
        res.send({ msg: "done" });
      }
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = registerController;
