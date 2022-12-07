const mongoose = require('mongoose');

const Guest = mongoose.model('Guest', new mongoose.Schema({
    title: {
        type: String,
        default: "guest"
    },
    value: {
        type: Number,
        required: true
    }
}));

exports.Guest = Guest;