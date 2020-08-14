const express = require('express');

const viewDir = require('./constants/view_dir');

const ArticleRepository = require('../datastore/repository/ArticleRepository');
const articleCtrl = new ArticleRepository();

const load = require('../datastore/publish').load;

/**
 * 
 * @param {Express} app 
 */
module.exports = (app) => {

    app.use('/site/s', express.static(__dirname + "/public"));

    app.get('/hello', (req, res, next) => {
        res.render(viewDir + '/hello.pug');
    });

    app.get('/', (req, res, next) => {
        res.redirect('/null');
    })

    app.get('/:articleId', async (req, res, next) => {
        try {
            const param = await load();
            const articleId = req.params.articleId;
            if(articleId != 'null'){
                const article = await articleCtrl.findArticle(req.params.articleId);
                param.article = article; 
            }
            res.render(viewDir + '/main/index.pug', param)
        } catch (err) {
            console.log(err);
            res.sendStatus(500);
        }
    })

}