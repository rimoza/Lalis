const express = require("express");
const mongoose = require("mongoose");
const Game = require("../models/game");

const router = express.Router();

router.patch("/games/:id/:team", (req, res) => {
  const id = req.params.id;
  const team = req.params.team;
  const update = {};
  update[`${team}Score`] = -1;

  Game.findById(id, (error, game) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    if (game[`${team}Score`] <= 0 || game.finished) {
      res.sendStatus(400);
      return;
    }

    Game.findByIdAndUpdate(id, { $inc: update }, (error, game) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      }

      res.send(game);
    });
  });
});

module.exports = router;
