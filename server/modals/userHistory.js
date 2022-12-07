const Joi = require('joi');
const mongoose = require("mongoose");

const UserHistory = mongoose.model('UserHistory', new mongoose.Schema({
    guest: {
        type: new mongoose.Schema({
            title: {
                type: String,
                default: 'guest',
            },
            value: {
                type: Number,
                required: true
            }
        }),
        required: true
    },
    home: {
        type: new mongoose.Schema({
            title: {
                type: String,
                default: 'home'
            },
            value: {
                type: Number,
                required: true
            }
        }),
        required: true
    },
    no: {
        type: Number,
        min: 1,

    }
}));

function validateHistory(users) {
    const schema = Joi.object({
        guestId: Joi.objectId().required(),
        homeId: Joi.objectId().required(),
      });
    return schema.validate(users);
};

exports.UserHistory = UserHistory;
exports.validate = validateHistory;