const mongoose = require('mongoose');

const shoesSchema = mongoose.Schema({
    Name: {type: String, required: true},
    Description: {type: String, default: "No description"},
    Price: {type: String, required: true},
    ImageURL: {type: String, required: true},
});

const Shoes = mongoose.model('Shoes', shoesSchema);

module.exports = Shoes;