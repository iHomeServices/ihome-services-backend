const {MongoClient} = require('mongodb');

const url = "mongodb://localhost:27017/ihomeservices";

const conn = new MongoClient(url);

conn.connect();

module.exports = conn;