const mongoClient = require('../repository/databaseConfig');

const authenticate = async (login) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("login").findOne({ 'username': login.username, 'password': login.password });
    mongoClient.close();
    return result;
}

const register = async (user) => {
    await mongoClient.connect();
    const result = await mongoClient.db().collection("login").insertOne(user);
    mongoClient.close();
    return result;
}

module.exports = {
    authenticate,
    register
}