const mongoClient = require('../repository/databaseConfig');

const authenticate = async (login) => {
    const result = await mongoClient.db().collection("login").findOne({ 'username': login.username, 'password': login.password });
    return result;
}

const register = async (user) => {
    const result = await mongoClient.db().collection("login").insertOne(user);
    return result;
}

module.exports = {
    authenticate,
    register
}