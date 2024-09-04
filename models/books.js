//const express = require("express");
const mongoose = require("mongoose");
// Define Schame wit timestamps and disable versionKey
// Define Model
const bookSchema = new mongoose.Schema({
    title:{type: String, require: true},
    author:{type: String, require: true},
    published_year:{type: Number, require: true},
    genre:{type: String, require: true},
    available:{type: Number, require: true},
}, {timestamps: true, versionKey: false});

// Export Model
module.exports = mongoose.model('Books',bookSchema);
