const mongoose = require('mongoose');

module.exports = mongoose.model('Rubriques', mongoose.Schema({
    title: { type: String, require: true },
    menu: { type: mongoose.Types.ObjectId, ref: 'Menus'}
}));