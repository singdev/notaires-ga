const express = require('express');

const viewDir = require('./constants/view_dir');

const menuController = require('./controller/MenuController');
const rubriqueController = require('./controller/RubriqueController');
const articleController = require('./controller/ArticleController');

const MenuRepository = require('../datastore/repository/MenuRepository');
const RubriqueRepository = require('../datastore/repository/RubriqueRepository');
const ArticleRepository = require('../datastore/repository/ArticleRepository');

const menuCtrl = new MenuRepository();
const rubriqueCtrl = new RubriqueRepository();
const articleCtrl = new ArticleRepository();

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.get('/hello/cms1', (req, res, next) => {
        res.render(viewDir + '/hello.pug');
    });

    app.get('/cms1', async (req, res, next) => {
        try {
            const menus = await menuCtrl.findAllMenu();
            const rubriques = await rubriqueCtrl.findAllRubrique();
            const articles = await articleCtrl.findAllArticle();
            res.render(viewDir + '/index.pug', { menus, rubriques, articles });
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    });

    app.post('/cms1/menu', menuController.createMenu);
    app.post('/cms1/rubrique', rubriqueController.createRubrique);
    app.post('/cms1/article', articleController.createArticle);

    app.use('/cms1/s', express.static(__dirname + "/public"));
}