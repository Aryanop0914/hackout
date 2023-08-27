const event = require("../../Schemas/createEvent");

const eventContoller = {
  async createEvent(req, res, next) {
    const { email, title, type, description, date, time, sponsors, speaker } =
      req.body;
    try {
      const done = await event.create({
        email,
        title,
        type,
        description,
        date,
        time,
        sponsors,
        speaker,
      });
      res.send(done);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchEvent(req, res, next) {
    const { email } = req.body;
    try {
      const done = await event.find({
        email: email,
      });
      res.send(done);
    } catch (e) {
      console.log(e);
    }
  },
  async fetchallEvent(req, res, next) {
    try {
      const done = await event.find();
      res.send(done);
    } catch (e) {
      console.log(e);
    }
  },
};

module.exports = eventContoller;
