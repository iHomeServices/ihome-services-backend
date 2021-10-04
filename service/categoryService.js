const categoryRepository = require('../repository/categoryRepository');

async function getCategories() {
    const categories = await categoryRepository.getCategories();
    return categories;
}

module.exports = {
    getCategories
}