const MenuRepository = require('../../datastore/repository/MenuRepository');

const menuCtrl = new MenuRepository();

module.exports = {

    async createMenu(req, res, next){
        try {
            const menu = await menuCtrl.createMenu(req.body);
            res.redirect('/cms1');
        }catch(err){
            res.redirect('/cms1');
        }
    }
}