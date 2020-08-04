const express = require('express');

const viewDir = require('./constants/view_dir');

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.use('/cms1/s', express.static(__dirname + "/public"));
  

    app.get('/hello/cms1', (req, res, next) => {
        res.render(viewDir + '/hello.pug');
    });

}