const mongoClient = require('../repository/databaseConfig');
const { ObjectId } = require('bson');

const getCustomers = async () => {
    await mongoClient.connect();
    const customers = await mongoClient.db().collection("customer").find({}).toArray();
    mongoClient.close();
    return customers;
}

const getCustomerById = async (id) => {
    await mongoClient.connect();
    const customer = await mongoClient.db().collection("customer").findOne({ '_id': ObjectId(id) });

    if (customer) {
        const login = await mongoClient.db().collection("login").findOne({ 'userId': ObjectId(id) });

        const services = await mongoClient.db().collection("service").find({ 'idCustomer': ObjectId(id) }).toArray();
        mongoClient.close();


        const fullCustomer = {
            ...customer,
            username: login.username,
            isProvider: false,
            services: [...services]
        };

        return fullCustomer;
    } else {
        mongoClient.close();
        return {};
    }
}

const register = async (customer) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("customer").insertOne(customer);
    mongoClient.close();
    return result;
}

module.exports = {
    getCustomers,
    getCustomerById,
    register
}