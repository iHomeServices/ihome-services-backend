const mongoClient = require('../repository/databaseConfig');
const { ObjectId } = require('bson');

const getProviders = async () => {
    await mongoClient.connect();
    const providers = await mongoClient.db().collection("provider").find({}).toArray();
    mongoClient.close();
    return providers;
}

const getProviderById = async (id) => {
    await mongoClient.connect();
    const provider = await mongoClient.db().collection("provider").findOne({ '_id': ObjectId(id) });

    if (provider) {
        // const services = provider.services.map(service => ObjectId(service));
        // const ratings = await mongoClient.db().collection("service").find({ '_id': { $in: services } }).toArray();
        const services = await mongoClient.db().collection("service").find({ 'idProvider': ObjectId(id) }).toArray();

        const fullProvider = {
            ...provider,
            services: [...services]
        };

        return fullProvider;

    } else {
        return {};
    }
}

const createService = async (service) => {
    service.comment = null;
    service.rating = null;
    service.startDate = Date.now();
    service.endDate = null;
    service.isDone = false;
    await mongoClient.connect();
    await mongoClient.db().collection("service").insertOne(service);
}

const editProvider = async (id, provider) => {
    await mongoClient.connect();
    await mongoClient.db().collection("provider").findOneAndReplace({ '_id': ObjectId(id) }, provider);
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider
}