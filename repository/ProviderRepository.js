const mongoClient = require('./databaseConfig');
const { ObjectId } = require('bson');

const getProviders = async () => {
    const providers = await mongoClient.db().collection("provider").find({}).toArray();
    return providers;
}

const getProviderById = async (id) => {
    try {
        const provider = await mongoClient.db().collection("provider").findOne({ '_id': ObjectId(id) });

        if (provider) {
            const login = await mongoClient.db().collection("login").findOne({ 'userId': ObjectId(id) });

            const services = await mongoClient.db().collection("service").find({ 'idProvider': ObjectId(id) }).toArray();

            const fullProvider = {
                ...provider,
                username: login.username,
                isProvider: true,
                services: [...services]
            };

            return fullProvider;
        } else {
            return {};
        }
    } catch (err) {
        console.log(err);
        return {};
    }
}

const createService = async (service) => {
    service.comment = null;
    service.rating = null;
    service.startDate = Date.now();
    service.endDate = null;
    service.isDone = false;
    await mongoClient.db().collection("service").insertOne(service);
}

const editProvider = async (id, provider) => {
    await mongoClient.db().collection("provider").findOneAndReplace({ '_id': ObjectId(id) }, provider);
}

const finishServiceAndAddEvaluation = async (id, evaluation) => {
    await mongoClient.db().collection("service").findOneAndUpdate({ '_id': ObjectId(id) }, {
        $set: {
            isDone: true,
            endDate: Date.now(),
            comment: evaluation.comment,
            rating: evaluation.rating
        }
    });
}

const cancelService = async (id) => {
    await mongoClient.db().collection("service").deleteOne({ '_id': ObjectId(id) });
}

const register = async (provider) => {
    const result = await mongoClient.db().collection("provider").insertOne(provider);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider,
    finishServiceAndAddEvaluation,
    cancelService,
    register
}