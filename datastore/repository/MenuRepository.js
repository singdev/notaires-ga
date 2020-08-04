const Menu = require('../models/menu');

module.exports = class {

    async createMenu(menu){
        const m = new Menu(menu);
        const result = await m.save();
        return result;
    }

    async findAllMenu(){
        const menus = await Menu.find({});
        return menus;
    }

    async findMenuById(id){
        const menu = await Menu.findOne({ _id: id});
        return menu;
    }

    async updateMenu(id, menu){
        return await Menu.findOneAndUpdate({ _id: id}, menu, { new: true});
    }

    async deleteMenu(id){
        return await Menu.findOneAndDelete({ _id: id});
    }
}