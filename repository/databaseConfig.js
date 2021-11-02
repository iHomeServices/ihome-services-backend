const {MongoClient} = require('mongodb');

// const url = "mongodb://localhost:27017/ihomeservices";
const url = "mongodb+srv://admin:admin@cluster0.29ww3.mongodb.net/ihomeservices?retryWrites=true&w=majority";

const mongoClient = new MongoClient(url);
mongoClient.connect();

module.exports = mongoClient;