const express = require('express');
const multer = require('multer');

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

async function load(){
    const menus = await menuCtrl.findAllMenu();
    const rubriques = await rubriqueCtrl.findAllRubrique();
    const articles = await articleCtrl.findAllArticle();

    return { menus, rubriques, articles };
}

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            console.log("Hello world la family")
            cb(null, __dirname + '/public/uploads')
        },
        filename: function (req, file, cb) {
            console.log("Hello world la family")
            cb(null, file.fieldname + '-' + Date.now())
        }
    })
    
    const upload = multer({ storage: storage })

    app.get('/hello/cms1', (req, res, next) => {
        res.render(viewDir + '/hello.pug');
    });

    app.get('/cms1', async (req, res, next) => {
        res.redirect('/cms1/null');
    });

    app.get('/cms1/:articleId', async (req, res, next) => {
        try {
            const param = await load();
            const articleId = req.params.articleId;
            if(articleId != 'null'){
                const article = await articleCtrl.findArticle(req.params.articleId);
                param.article = article; 
            }
            res.render(viewDir + '/index.pug', param)
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    })

    //Create
    app.post('/cms1/menu', menuController.createMenu);
    app.post('/cms1/rubrique', rubriqueController.createRubrique);
    app.post('/cms1/article', articleController.createArticle);

    //Delete
    app.post('/cms1/article/delete', articleController.deleteArticle);
    app.post('/cms1/rubrique/delete', rubriqueController.deleteRubrique);
    app.post('/cms1/menu/delete', menuController.deleteMenu);

    //Update
    app.post('/cms1/article/:id/photo', upload.single('photo'), articleController.changePhoto);

    //Static
    app.use('/cms1/s', express.static(__dirname + "/public"));
}