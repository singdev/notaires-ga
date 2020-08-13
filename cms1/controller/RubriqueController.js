const RubriqueRepository = require('../../datastore/repository/RubriqueRepository');
const ArticleRepository = require('../../datastore/repository/ArticleRepository');

const rubriqueRepository = new RubriqueRepository();
const articleCtrl = new ArticleRepository();

module.exports = {

    async createRubrique(req, res, next) {
        try {
            const rubrique = await rubriqueRepository.createRubrique(req.body);
            res.redirect('/cms1');
        } catch (err) {
            res.redirect('/cms1');
        }
    },

    async deleteRubrique(req, res, next) {
        try {
            const articles = await articleCtrl.findByRubrique(req.body.id);
            articles.forEach(async a => {
                await articleCtrl.deleteArticle(a._id);
            });
            await rubriqueRepository.deleteRubrique(req.body.id);
            res.redirect('/cms1');
        } catch (err) {
            res.redirect('/cms1');
        }
    }
}