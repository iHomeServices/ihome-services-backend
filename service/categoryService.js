const categoryRepository = require('../repository/categoryRepository');

async function getCategories() {
    try{
        const categories = await categoryRepository.getCategories();
        return categories;
    }catch(err){
        throw err;
    }
}

module.exports = {
    getCategories
}