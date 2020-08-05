const RubriqueRepository = require('../../datastore/repository/RubriqueRepository');

const rubriqueRepository = new RubriqueRepository();

module.exports = {

    async createRubrique(req, res, next){
        try {
            const rubrique = await rubriqueRepository.createRubrique(req.body);
            res.redirect('/cms1');
        }catch(err){
            res.redirect('/cms1');
        }
    }
}