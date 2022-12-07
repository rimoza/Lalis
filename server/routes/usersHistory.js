const {UserHistory, validate} = require('../modals/userHistory');
const {Guest} = require('../modals/guest');
const {Home} = require('../modals/home');
const Joi = require("joi");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const usersHistory = await UserHistory.find();
  res.send(usersHistory);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  
  if (error)
    return res.status(400).send(error.details[0].message);

    const guest = await Guest.findById(req.body.guestId);
    if(!guest) return res.status(404).send('Guest user not found');

    const home = await Home.findById(req.body.homeId);
    if(!home) return res.status(404).send('Home user not found');

  const userHistory = new UserHistory({
    guest: {
        _id: guest._id,
        value: guest.value
    },
    home: {
        _id: home._id,
        value: home.value
    }
  });

  await userHistory.save();

  res.send(userHistory);
});

router.get("/:id", async (req, res) => {
  const userHistory = await UserHistory.findById(req.params.id);
  if (!userHistory) return res.status(404).send("User history  with given ID not found");

  res.send(userHistory);
});

module.exports = router;