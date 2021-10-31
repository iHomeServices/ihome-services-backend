const { ObjectId } = require('bson');
const mongoClient = require('./databaseConfig');

const collections = [
    "provider",
    "customer",
    "category",
    "service",
    "login"
]

const dropCollection = async (collection) => {
    try {
        await mongoClient.db().dropCollection(collection);
    } catch (err) {
        console.error(`Drop collection ${collection} failed.`, err.message);
    }
}

const createCollection = async (collection) => {
    try {
        await mongoClient.db().createCollection(collection);
    } catch (err) {
        console.error(`Create collection ${collection} failed.`, err.message);
    }
}

const populateDatabase = async () => {
    await mongoClient.connect();

    collections.forEach(async (collection) => {
        await dropCollection(collection);
    });

    collections.forEach(async (collection) => {
        await createCollection(collection);
    });

    const idProvider1 = ObjectId();
    const idProvider2 = ObjectId();
    const idProvider3 = ObjectId();
    const idCustomer1 = ObjectId();
    const idCustomer2 = ObjectId();
    const idCustomer3 = ObjectId();
    const idCategory1 = ObjectId();
    const idCategory2 = ObjectId();

    const providers = [
        {
            _id: idProvider1,
            avatar: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/a/8/5/3a852df5917814a20762d8ea755170ba.jpg',
            name: "Caetano Veloso",
            city: "Salvador",
            state: "BA",
            phoneNumber: 5516992428527,
            email: "caetano@hotmail.com",
            categoryId: idCategory1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider2,
            name: "Milton Nascimento",
            avatar: 'https://www.eventim.com.br/obj/media/BR-eventim/galery/222x222/m/milton-nascimento-222x222.jpg',
            city: "Santos",
            state: "SP",
            phoneNumber: 5516992428527,
            email: "milton@gmail.com",
            categoryId: idCategory1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider3,
            name: "Michael Jackson",
            avatar: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/capa_8.jpg?Lr_Je.lLbu9XOokyALMrahQwsZQ7OQ75&itok=JHWfuewT',
            city: "Araraquara",
            state: "SP",
            phoneNumber: 5516992428527,
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
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
            phoneNumber: 5516999112233
        },
        {
            _id: idCustomer3,
            name: "Lionel Ritchie",
            city: "Araraquara",
            phoneNumber: 5516999112233
        }
    ];

    const categories = [
        {
            _id: idCategory1,
            name: 'Eletricista',
            icon: 'flash'
        },
        {
            _id: idCategory2,
            name: 'Pedreiro',
            icon: 'home'
        },
        {
            name: 'Piscineiro',
            icon: 'pool'
        },
        {
            name: 'Pintor',
            icon: 'format-paint'
        },
        {
            name: 'Jardineiro',
            icon: 'leaf'
        }
    ];

    const services = [
        {
            idProvider: idProvider1,
            idCustomer: idCustomer3,
            nameCustomer: 'Lionel Ritchie',
            comment: null,
            rating: null,
            startDate: 1634342973000,
            endDate: null,
            isDone: false,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer1,
            nameCustomer: 'Rita Lee',
            comment: "Muito bom",
            rating: 5,
            startDate: 1629850173000,
            endDate: 1630282173000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: 'Roberto Carlos',
            comment: "Serviço mais ou menos",
            rating: 2,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        }
    ];

    const login = [
        {
            userId: idProvider1,
            username: "c.veloso",
            password: "123",
            isProvider: true,
        },
        {
            userId: idProvider2,
            username: "milton_nascimento",
            password: "123",
            isProvider: true,
        },
        {
            userId: idProvider3,
            username: "jackson.michael",
            password: "123",
            isProvider: true,
        },
        {
            userId: idCustomer1,
            username: "ritaLee",
            password: "123",
            isProvider: false,
        },
        {
            userId: idCustomer2,
            username: "roberto_carlos",
            password: "123",
            isProvider: false,
        },
        {
            userId: idCustomer3,
            username: "lionel.ritchie",
            password: "123",
            isProvider: false,
        }
    ];

    await mongoClient.db().collection("provider").insertMany(providers);
    await mongoClient.db().collection("customer").insertMany(customers);
    await mongoClient.db().collection("category").insertMany(categories);
    await mongoClient.db().collection("service").insertMany(services);
    await mongoClient.db().collection("login").insertMany(login);

    mongoClient.close();
}

module.exports = {
    populateDatabase
}