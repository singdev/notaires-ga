const ArticleRepository = require('../../datastore/repository/ArticleRepository');

const articleRepository = new ArticleRepository();

module.exports = {

    async createArticle(req, res, next){
        try {
            const article = await articleRepository.createArticle(req.body);
            res.redirect('/cms1');
        }catch(err){
            res.redirect('/cms1');
        }
    }
}