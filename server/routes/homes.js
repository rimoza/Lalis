const {Home} = require('../modals/home');
const Joi = require("joi");
const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  const homes = await Home.find();
  res.send(homes);
});

router.post("/", async (req, res) => {
  const schema = Joi.object({
    no: Joi.number().integer(),
    value: Joi.number().integer().required(),
  });

  const result = schema.validate(req.body);
  if (result.error)
    return res.status(404).send(result.error.details[0].message);

  let home = new Home({
    no: req.body.no,
    value: req.body.value,
  });

  home = await home.save();
  res.send(home);
});

router.get("/:id", async (req, res) => {
  const home = await Home.findById(req.params.id);
  if (!home) return res.status(400).send("Home game with given ID not found");

  res.send(home);
});

module.exports = router;
