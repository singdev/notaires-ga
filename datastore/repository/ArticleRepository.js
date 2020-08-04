const Article = require('../models/article');

module.exports = class ArticleRepository {

    async createArticle(article){
        const r = new Article(article);
        return await r.save();
    }

    async findAllArticle(){
        return await Article.find({}).populate('rubrique').exec();
    }

    async findByRubrique(rubriqueId){
        return await Article.find({ rubrique: rubriqueId});
    }

    async findArticle(id){
        return await Article.findOne({ _id: id});
    }

    async updateArticle(id, article){
        return await Article.findOneAndUpdate({ _id: id}, article, { new: true});
    }

    async deleteArticle(id){
        return await Article.findOneAndDelete({ _id: id});
    }
}