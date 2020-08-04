const express = require('express');

const viewDir = require('./constants/view_dir');

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.use(express.static(__dirname + "/public"));

    app.get('/hello', (req, res, next) => {
        res.render(viewDir + '/hello.pug');
    });

}