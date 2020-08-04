const mongoose = require('mongoose');

module.exports = mongoose.model('Menus', mongoose.Schema({
    title: { type: String, require: true }
}));