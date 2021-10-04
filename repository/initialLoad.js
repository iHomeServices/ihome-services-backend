const mongoClient = require('./databaseConfig');

const populateDatabase = async () => {
    await mongoClient.connect();
    await mongoClient.db().createCollection("provider");
    await mongoClient.db().createCollection("customer");
    await mongoClient.db().createCollection("category");
    await mongoClient.db().createCollection("service");

    const providers = [
        {
            name: "Caetano Veloso",
            city: "Salvador",
            phoneNumber: 16999112233,
            categoryId: 1,
            services: [1, 2]
        },
        {
            name: "Milton Nascimento",
            city: "Santos",
            phoneNumber: 16999112233,
            categoryId: 1,
            services: [3]
        },
        {
            name: "Michael Jackson",
            city: "Araraquara",
            phoneNumber: 16999112233,
            categoryId: 2,
            services: []
        }
    ];

    const customers = [
        {
            name: "Rita Lee",
            city: "Rio de Janeiro",
            phoneNumber: 16999112233,
            services: [1, 2]
        },
        {
            name: "Roberto Carlos",
            city: "Santos",
            phoneNumber: 16999112233,
            services: [3]
        },
        {
            name: "Lionel Ritchie",
            city: "Araraquara",
            phoneNumber: 16999112233,
            services: []
        }
    ];

    const categories = [
        {
            id: 1,
            name: "Eletricista"
        },
        {
            id: 2,
            name: "Pintor"
        },
        {
            id: 3,
            name: "Jardineiro"
        },
        {
            id: 4,
            name: "Pedreiro"
        },
        {
            id: 5,
            name: "Piscineiro"
        },

    ]
    
    const services = [
        {
            id: 1,
            comment: "Muito bom",
            rating: 5
        },
        {
            id: 2,
            comment: "Serviço mais ou menos",
            rating: 2
        },
        {
            id: 3,
            comment: "Gostei",
            rating: 4
        }
    ];
    
    await mongoClient.db().collection("provider").insertMany(providers);
    await mongoClient.db().collection("customer").insertMany(customers);
    await mongoClient.db().collection("category").insertMany(categories);
    await mongoClient.db().collection("service").insertMany(services);
    
    mongoClient.close();
}

module.exports = {
    populateDatabase
}