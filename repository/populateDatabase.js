const conn = require('../repository/databaseConfig');

const populate = async () => {
    await conn.db().createCollection("customer", function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        conn.close();
    });

    var myobj = { name: "Company Inc", address: "Highway 37" };
    await conn.db().collection("customer").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        conn.close();
    });
}

module.exports = {
    populate
}