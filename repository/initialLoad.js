const mongoClient = require('./databaseConfig');

const collections = [
    "provider",
    "customer",
    "category",
    "service"
]

const dropCollection = async (collection) => {
    try{
        await mongoClient.db().dropCollection(collection);
    }catch(err){
        console.error(`Drop collection ${collection} failed.`, err.message);
    }
}

const createCollection = async (collection) => {
    try{
        await mongoClient.db().createCollection(collection);
    }catch(err){
        console.error(`Create collection ${collection} failed.`, err.message);
    }
}

const populateDatabase = async () => {
    await mongoClient.connect();

    collections.forEach(async (collection) => {
        await dropCollection(collection);
        await createCollection(collection);
    });

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
            name: 'Eletricista',
            icon: 'flash'
        },
        {
            id: 2,
            name: 'Pedreiro',
            icon: 'home'
        },
        {
            id: 3,
            name: 'Piscineiro',
            icon: 'pool'
        },
        {
            id: 4,
            name: 'Pintor',
            icon: 'format-paint'
        },
        {
            id: 5,
            name: 'Jardineiro',
            icon: 'leaf'
        }
    ];

    const services = [
        {
            comment: "Ruim demais",
            rating: 1
        },
        {
            comment: "Muito bom",
            rating: 5
        },
        {
            comment: "Serviço mais ou menos",
            rating: 2
        },
        {
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