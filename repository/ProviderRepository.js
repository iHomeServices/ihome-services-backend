const mongoClient = require('../repository/databaseConfig');

const getProviders = async () => {
    await mongoClient.connect();
    const providers = await mongoClient.db().collection("provider").find({}).toArray();
    mongoClient.close();
    return providers;
}

module.exports = {
    getProviders
}