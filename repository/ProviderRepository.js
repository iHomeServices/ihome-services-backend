const mongoClient = require('../repository/databaseConfig');

const getProviders = async () => {
    await mongoClient.connect();
    const providers = await mongoClient.db().collection("provider").find({}).toArray();
    mongoClient.close();
    return providers;
}

const getProviderById = async (id) => {
    await mongoClient.connect();
    const provider = await mongoClient.db().collection("provider").findOne({ id: Number(id) });

    if (provider) {
        const services = provider.services.map(service => Number(service));
        const ratings = await mongoClient.db().collection("service").find({ id: { $in: services } }).toArray();

        const fullProvider = {
            ...provider,
            ratings: [...ratings]
        };

        return fullProvider;
    } else {
        return {};
    }
}

module.exports = {
    getProviders,
    getProviderById
}