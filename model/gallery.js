const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    submitForm: {
        type: String,
        required: true
    },
    photos: []
});

module.exports = mongoose.model('Gallery', gallerySchema);