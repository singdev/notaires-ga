const Rubrique = require('../models/rubrique');

module.exports = class RubriqueRepository {

    async createRubrique(rubrique) {
        const r = new Rubrique(rubrique);
        return await r.save();
    }

    async findAllRubrique() {
        return await Rubrique.find({}).populate('menu').exec();
    }

    async findByMenu(menuId) {
        return await Rubrique.find({ menu: menuId });
    }

    async findRubrique(id) {
        return await Rubrique.findOne({ _id: id });
    }

    async updateRubrique(id, rubrique) {
        return await Rubrique.findOneAndUpdate({ _id: id }, rubrique, { new: true });
    }

    async deleteRubrique(id) {
        return await Rubrique.findOneAndDelete({ _id: id });
    }
}