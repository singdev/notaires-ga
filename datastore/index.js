const mongoose = require('mongoose');

module.exports = () => {
    const DB_NAME = process.env.DB_NAME || 'notairesga';
    const DB_HOST = process.env.DB_HOST || '127.0.0.1';

    mongoose.connect(`mongodb://${DB_HOST}:27017/${DB_NAME}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    mongoose.connection.on('open', () => { console.log("MongoDB is connected !")});
    mongoose.connection.on('error', () => { console.log("MongoDB is note connected")});
}