const mongoClient = require('../repository/databaseConfig');

const getCategories = async () => {
    await mongoClient.connect();
    const categories = await mongoClient.db().collection("category").find({}).toArray();
    mongoClient.close();
    return categories;
}

module.exports = {
    getCategories
}