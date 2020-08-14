const MenuRepository = require('../datastore/repository/MenuRepository');
const RubriqueRepository = require('../datastore/repository/RubriqueRepository');
const ArticleRepository = require('../datastore/repository/ArticleRepository');

const menuCtrl = new MenuRepository();
const rubriqueCtrl = new RubriqueRepository();
const articleCtrl = new ArticleRepository();

module.exports = {


    async load() {
        const menus = await menuCtrl.findAllMenu();
        const rubriques = await rubriqueCtrl.findAllRubrique();
        const articles = await articleCtrl.findAllArticle();

        return { menus, rubriques, articles };
    }
}