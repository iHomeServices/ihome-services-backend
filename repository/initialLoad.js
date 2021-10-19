const { ObjectId } = require('bson');
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

    const idProvider1 = ObjectId();
    const idProvider2 = ObjectId();
    const idCustomer1 = ObjectId();
    const idCustomer2 = ObjectId();

    const providers = [
        {
            _id: idProvider1,
            name: "Caetano Veloso",
            city: "Salvador",
            phoneNumber: 16999112233,
            email: "caetano@hotmail.com",
            categoryId: 1
        },
        {
            _id: idProvider2,
            name: "Milton Nascimento",
            city: "Santos",
            phoneNumber: 16999112233,
            email: "milton@gmail.com",
            categoryId: 1
        },
        {
            name: "Michael Jackson",
            city: "Araraquara",
            phoneNumber: 16999112233,
            email: "mjackson@gmail.com",
            categoryId: 2
        }
    ];

    const customers = [
        {
            _id: idCustomer1,
            name: "Rita Lee",
            city: "Rio de Janeiro",
            phoneNumber: 16999112233
        },
        {
            _id: idCustomer2,
            name: "Roberto Carlos",
            city: "Santos",
            phoneNumber: 16999112233
        },
        {
            name: "Lionel Ritchie",
            city: "Araraquara",
            phoneNumber: 16999112233
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
            idProvider: idProvider1,
            idCustomer: idCustomer1,
            comment: null,
            rating: null,
            startDate: 1634342973000,
            endDate: null,
            isDone: false,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer1,
            comment: "Muito bom",
            rating: 5,
            startDate: 1629850173000,
            endDate: 1630282173000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            comment: "Serviço mais ou menos",
            rating: 2,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
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