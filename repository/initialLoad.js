const mongoClient = require('./databaseConfig');

const populateDatabase = async () => {
    await mongoClient.connect();
    await mongoClient.db().createCollection("provider");
    await mongoClient.db().createCollection("customer");
    await mongoClient.db().createCollection("service");

    var providers = [
        {
            name: "Caetano Veloso",
            street: "Rua do Caetano",
            number: 78,
            city: "Salvador",
            services: [1, 2]
        },
        {
            name: "Milton Nascimento",
            street: "Rua do Milton",
            number: 637,
            city: "Santos",
            services: [3]
        },
        {
            name: "Michael Jackson",
            street: "Rua do Michael",
            number: 884,
            city: "Araraquara",
            services: []
        }
    ];

    var customers = [
        {
            name: "Rita Lee",
            street: "Rua da Rita",
            number: 52,
            city: "Rio de Janeiro",
            services: [1, 2]
        },
        {
            name: "Roberto Carlos",
            street: "Rua do Roberto",
            number: 637,
            city: "Santos",
            services: [3]
        },
        {
            name: "Lionel Ritchie",
            street: "Rua do Lionel",
            number: 884,
            city: "Araraquara",
            services: []
        }
    ];
    
    var services = [
        {
            comments: [
                {
                    rating: 5,
                    description: "Muito bom"
                },
                {
                    rating: 3,
                    description: "Deixou falhas no serviço"
                }
            ]
        },
        {
            comments: [
                {
                    rating: 1,
                    description: "Ruim"
                }
            ]
        }
    ];
    
    await mongoClient.db().collection("provider").insertMany(providers);
    await mongoClient.db().collection("customer").insertMany(customers);
    await mongoClient.db().collection("service").insertMany(services);
    
    mongoClient.close();
}

module.exports = {
    populateDatabase
}