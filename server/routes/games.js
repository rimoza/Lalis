const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();
const Game = require("../models/game");
const History = require("../models/history");

// Get all games
router.get("/", (req, res) => {
  Game.find((error, games) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    res.send(games);
  });
});

// Get game by ID
router.get("/:id", (req, res) => {
  const id = req.params.id;

  Game.findById(id, (error, game) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    if (!game) {
      res.sendStatus(404);
      return;
    }

    res.send(game);
  });
});

// Create game
router.post("/", (req, res) => {
  const game = new Game({
    homeScore: 0,
    guestScore: 0,
  });

  game.save((error) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    res.send(game);
  });
});

// Increment home or guest score
router.put("/:id/:team", (req, res) => {
  const id = req.params.id;
  const team = req.params.team;
  const update = {};
  update[`${team}Score`] = 1;

  Game.findById(id, (error, game) => {
    if (error) {
      console.error(error);
      res.sendStatus(500);
      return;
    }

    if (!game) {
      res.sendStatus(404);
      return;
    }

    if (game.finished) {
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

// Decrement home or guest score
router.patch("/:id/:team", (req, res) => {
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
    if (!game) {
      res.sendStatus(404);
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

// Finish game and store result in history
router.delete("/:id", (req, res) => {
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

module.exports = router;
