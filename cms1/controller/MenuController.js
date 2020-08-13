const MenuRepository = require('../../datastore/repository/MenuRepository');
const RubriqueRepository = require('../../datastore/repository/RubriqueRepository');
const ArticleRepository = require('../../datastore/repository/ArticleRepository');


const menuCtrl = new MenuRepository();
const rubriqueCtrl = new RubriqueRepository();
const articleCtrl = new ArticleRepository();

module.exports = {

    async createMenu(req, res, next){
        try {
            await menuCtrl.createMenu(req.body);
            res.redirect('/cms1');
        }catch(err){
            res.redirect('/cms1');
        }
    },

    async deleteMenu(req, res, next){
        try {
          const rubriques = await rubriqueCtrl.findByMenu(req.body.id);
          rubriques.forEach(async rubrique => {
              const articles = await articleCtrl.findByRubrique(rubrique._id);
              articles.forEach(async a => {
                  await articleCtrl.deleteArticle(a._id);
              });
              await rubriqueCtrl.deleteRubrique(rubrique._id);
          });
          await menuCtrl.deleteMenu(req.body.id);
          res.redirect('/cms1');
        } catch(err){
            res.redirect('/cms1');
        }
    }
}