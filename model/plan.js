const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const planScehma = new Schema({
    typeSubscription: {
        type: String,
        required: true
    },
    subSubscription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    advisor: {
        type: String,
        required: true
    },
    whichDays: {
        fromDay: { type: String, required: true },
        toDay: { type: String, required: true }
    },
    openingTimes: {
        fromTime: { type: String, required: true },
        toTime: { type: String, required: true }
    },
    advisorActivity: {
        type: String,
        required: true
    },
    submitForm: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Plan', planScehma);