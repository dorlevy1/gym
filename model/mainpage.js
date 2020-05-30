const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mainPageSchema = new Schema({
    smallTitle: {
        type: String,
        required: true
    },
    bigTitle: {
        type: String,
        required: true
    },
    clickBtn: {
        type: String,
        required: true
    },
    menTitle: {
        type: String,
        required: true
    },
    womenTitle: {
        type: String,
        required: true
    },
    descriptionMen: {
        type: String,
        required: true
    },
    descriptionWomen: {
        type: String,
        required: true
    },
    joinNow: { type: String, required: true }
}, { collection: 'mainpage' });

module.exports = mongoose.model('Mainpage', mainPageSchema);