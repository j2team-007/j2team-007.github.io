const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxlength: 255 },
    decription: { type: String, maxlength: 255 },
    author: { type: String, maxlength: 255 },
    tranings: { type: Number, max: 255 },
    image: { type: String, maxlength: 255 },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
