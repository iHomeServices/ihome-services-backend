const mongoClient = require('../repository/databaseConfig');
const { ObjectId } = require('bson');

const getCustomers = async () => {
    const customers = await mongoClient.db().collection("customer").find({}).toArray();
    return customers;
}

const getCustomerById = async (id) => {
    const customer = await mongoClient.db().collection("customer").findOne({ '_id': ObjectId(id) });

    if (customer) {
        const login = await mongoClient.db().collection("login").findOne({ 'userId': ObjectId(id) });

        const services = await mongoClient.db().collection("service").find({ 'idCustomer': ObjectId(id) }).toArray();


        const fullCustomer = {
            ...customer,
            username: login.username,
            isProvider: false,
            services: [...services]
        };

        return fullCustomer;
    } else {
        return {};
    }
}

const register = async (customer) => {
    const result = await mongoClient.db().collection("customer").insertOne(customer);
    return result;
}

module.exports = {
    getCustomers,
    getCustomerById,
    register
}