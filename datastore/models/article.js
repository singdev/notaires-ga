const mongoose = require('mongoose');

module.exports = mongoose.model('Articles', mongoose.Schema({
    title: { type: String, require: true},
    photoURL: { type: String },
    resume: { type: String, default: ""},
    rubrique: { type: mongoose.Types.ObjectId, ref: 'Rubriques'}
}));