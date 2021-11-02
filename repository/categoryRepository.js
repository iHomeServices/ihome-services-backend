const mongoClient = require('../repository/databaseConfig');

const getCategories = async () => {
    const categories = await mongoClient.db().collection("category").find({}).toArray();
    return categories;
}

module.exports = {
    getCategories
}