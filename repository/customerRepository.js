const mongoClient = require('../repository/databaseConfig');

const getCustomers = async () => {
    await mongoClient.connect();
    const customers = await mongoClient.db().collection("customer").find({}).toArray();
    mongoClient.close();
    return customers;
}

module.exports = {
    getCustomers
}