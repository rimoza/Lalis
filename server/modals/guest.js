// Active game result.
/*
scoreboard
{
    "homeScore": 0,
    "guestScore": 0,
    "history": [
        {
            "homeScore": 1,
            "guestScore": 0
        },
        {
            "homeScore": 1,
            "guestScore": 1
        },
        {
            "homeScore": 0,
            "guestScore": 2
        },
        ...
    ]
}

/incrScore?team=home
/decrScore?team=home
/addHistory?homeScore=1&guestScore=0

*/
// Past games results. -> history


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