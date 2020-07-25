const express = require('express');

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.use(express.static(__dirname + "/public"));
  
    app.set('views', __dirname + "/views");
    app.set('view engine', 'pug');

    app.get('/hello/cms1', (req, res, next) => {
        res.render('hello.pug');
    });

}