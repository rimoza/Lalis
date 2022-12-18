const express = require("express");
const mongoose = require("mongoose");
const Game = require("../models/game");
const History = require("../models/history");

const router = express.Router();

router.delete("/games/:id", (req, res) => {
  const id = req.params.id;

  Game.findByIdAndDelete(id, (error, game) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    const history = new History(game);
    history.save((error) => {
      if (error) {
        console.error(error);
        res.sendStatus(500);
        return;
      }

      res.sendStatus(200);
    });
  });
});

const mongoose = require("mongoose");
const History = require("./models/history");

// Delete game from history
router.delete("/history/:id", (req, res) => {
  const id = req.params.id;

  History.findByIdAndDelete(id, (error) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    res.sendStatus(200);
  });
});

module.exports = router;
