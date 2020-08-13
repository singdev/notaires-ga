const ArticleRepository = require('../../datastore/repository/ArticleRepository');

const articleRepository = new ArticleRepository();

const Domain = process.env.HOST || 'http://localhost:3000';

module.exports = {

    async deleteArticle(req, res, next){
        try {
            await articleRepository.deleteArticle(req.body.id);
            res.redirect('/cms1');
        } catch (err) {
            res.redirect('/cms1');
        }
    },

    async createArticle(req, res, next) {
        try {
            articleRepository.createArticle(req.body);
            res.redirect('/cms1');
        } catch (err) {
            res.redirect('/cms1');
        }
    },

    async changePhoto(req, res, next) {
        try {
            const file = req.file;
            const photoURL = `${Domain}/cms1/s/uploads/${file.filename}`;
            const id = req.params.id;
            const article = await articleRepository.findArticle(id);
            if (article) {
                await articleRepository.updateArticle(id, 
                    { title: article.title, rubrique: article.rubrique, photoURL });
                res.redirect('/cms1/' + id);
            } else {
                res.redirect('/cms1');
            }
        } catch (err) {
            console.log(err);
            res.redirect('/cms1');
        }
    },

    async updateArticle(req, res, next){
        try {
            await articleRepository.updateArticle(req.params.id, req.body);
            res.redirect('/cms1/' + req.params.id);
        } catch(err){
            console.log(err);
            res.redirect('/cms1');
        }
    }
}