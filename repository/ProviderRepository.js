const mongoClient = require('../repository/databaseConfig');

const getProviders = async () => {
    await mongoClient.connect();
    const providers = await mongoClient.db().collection("provider").find({}).toArray();
    mongoClient.close();
    return providers;
}

const getProviderById = async (id) => {
    await mongoClient.connect();
    const provider = await mongoClient.db().collection("provider").findOne({ _id: Number(id) });

    if (provider) {
        const services = provider.services.map(service => Number(service));
        const ratings = await mongoClient.db().collection("service").find({ _id: { $in: services } }).toArray();

        const fullProvider = {
            ...provider,
            ratings: [...ratings]
        };

        return fullProvider;
    } else {
        return {};
    }
}

const createService = async (service) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("service").insertOne(service);
    return result;
}

const editProvider = async (provider) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("provider").updateOne({ _id: Number(provider.id) }, provider);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider
}