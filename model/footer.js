const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const footerSchema = new Schema({
    leftTitle: {
        type: String,
        required: true
    },
    rightTitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('footer', footerSchema);