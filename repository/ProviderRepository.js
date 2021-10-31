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
    
    try {
        const provider = await mongoClient.db().collection("provider").findOne({ '_id': ObjectId(id) });

        if (provider) {
            const login = await mongoClient.db().collection("login").findOne({ 'userId': ObjectId(id) });
            
            const services = await mongoClient.db().collection("service").find({ 'idProvider': ObjectId(id) }).toArray();
            mongoClient.close();
    
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
    }catch(err){
        console.log(err);
        return {};
    }

    mongoClient.close();
}

const createService = async (service) => {
    service.comment = null;
    service.rating = null;
    service.startDate = Date.now();
    service.endDate = null;
    service.isDone = false;
    await mongoClient.connect();
    await mongoClient.db().collection("service").insertOne(service);
    mongoClient.close();
}

const editProvider = async (id, provider) => {
    await mongoClient.connect();
    await mongoClient.db().collection("provider").findOneAndReplace({ '_id': ObjectId(id) }, provider);
    mongoClient.close();
}

const finishService = async (id) => {
    await mongoClient.connect();
    await mongoClient.db().collection("service").findOneAndUpdate({ '_id': ObjectId(id) }, { 
        $set: { 
            isDone: true,
            endDate: Date.now()
        }
    });
    mongoClient.close();
}

const register = async (provider) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("provider").insertOne(provider);
    mongoClient.close();
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider,
    finishService,
    register
}