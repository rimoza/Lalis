const { Guest } = require('../modals/guest');
const Joi = require('joi');
const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
    const guests = await Guest.find();

    res.send(guests);
});

router.post('/', async (req, res) => {
    const schema = Joi.object({
        value: Joi.number().integer().required()
    });

    const result = schema.validate(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }

    const guest = new Guest({ value: req.body.value });

    guest = await guest.save();

    res.send(guest);
});

router.get('/:id', async (req, res) => {
    const guest = await Guest.findById(req.params.id);

    if (!guest) {
        return res.status(404).send('Guest game with given ID not found');
    }

    res.send(guest);
});

module.exports = router;