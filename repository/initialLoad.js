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
    collections.forEach(async (collection) => {
        await dropCollection(collection);
    });

    collections.forEach(async (collection) => {
        await createCollection(collection);
    });

    const idProvider1 = ObjectId();
    const idProvider2 = ObjectId();
    const idProvider3 = ObjectId();
    const idProvider4 = ObjectId();
    const idProvider5 = ObjectId();
    const idProvider6 = ObjectId();
    const idProvider7 = ObjectId();
    const idProvider8 = ObjectId();
    const idCustomer1 = ObjectId();
    const idCustomer2 = ObjectId();
    const idCustomer3 = ObjectId();
    const idCategory1 = ObjectId();
    const idCategory2 = ObjectId();

    const providers = [
        {
            _id: idProvider1,
            avatar: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/3/a/8/5/3a852df5917814a20762d8ea755170ba.jpg',
            name: "Ailton Guimaraes",
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "ailton@hotmail.com",
            categoryId: idCategory1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider2,
            name: "Vitor Hugo Santos",
            avatar: 'https://www.eventim.com.br/obj/media/BR-eventim/galery/222x222/m/milton-nascimento-222x222.jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "vitor.hugosantos@gmail.com",
            categoryId: idCategory2,
            description: "Curso de 2 anos no SENAI e experiência de 5 anos"
        },
        {
            _id: idProvider3,
            name: "Gabriel Oliveira",
            avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canstockphoto.com.br%2Fpersa-rosto-homem-feliz-trabalhador-74921371.html&psig=AOvVaw0l0Chz_d9FeZnd-9CaPQyz&ust=1638233997062000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIixy-6vvPQCFQAAAAAdAAAAABAD',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider4,
            name: "Henrique Silva",
            avatar: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/capa_8.jpg?Lr_Je.lLbu9XOokyALMrahQwsZQ7OQ75&itok=JHWfuewT',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider5,
            name: "Mateus Gomes",
            avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.canstockphoto.com.br%2Fjovem-trabalhador-desgastar-88651792.html&psig=AOvVaw0l0Chz_d9FeZnd-9CaPQyz&ust=1638233997062000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIixy-6vvPQCFQAAAAAdAAAAABAP',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider6,
            name: "Lucas de Araujo",
            avatar: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/capa_8.jpg?Lr_Je.lLbu9XOokyALMrahQwsZQ7OQ75&itok=JHWfuewT',
            city: "Ibaté",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider7,
            name: "Thiago Augusto Nunes",
            avatar: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/capa_8.jpg?Lr_Je.lLbu9XOokyALMrahQwsZQ7OQ75&itok=JHWfuewT',
            city: "Araraquara",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider8,
            name: "Bruno Rodrigues",
            avatar: 'https://files.nsctotal.com.br/s3fs-public/styles/paragraph_image_style/public/graphql-upload-files/capa_8.jpg?Lr_Je.lLbu9XOokyALMrahQwsZQ7OQ75&itok=JHWfuewT',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516992428527",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
    ];

    const customers = [
        {
            _id: idCustomer1,
            name: "Armando Bittencourt",
            city: "Rio de Janeiro",
            phoneNumber: "1699911223"
        },
        {
            _id: idCustomer2,
            name: "Gustavo Bueno",
            city: "Santos",
            phoneNumber: "551699911223"
        },
        {
            _id: idCustomer3,
            name: "Joel Paiva",
            city: "Araraquara",
            phoneNumber: "551699911223"
        }
    ];

    const categories = [
        {
            _id: idCategory1,
            name: 'Pedreiro',
            icon: 'home'
        },
        {
            _id: idCategory2,
            name: 'Eletricista',
            icon: 'flash'
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
            nameCustomer: providers[1].name,
            comment: null,
            rating: null,
            startDate: 1634342973000,
            endDate: null,
            isDone: false,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer1,
            nameCustomer: providers[1].name,
            comment: "Muito bom",
            rating: 5,
            startDate: 1629850173000,
            endDate: 1630282173000,
            isDone: true,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer2,
            nameCustomer: providers[1].name,
            comment: "Serviço ficou mais ou menos",
            rating: 3,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer2,
            nameCustomer: providers[1].name,
            comment: "Gostei muito",
            rating: 4,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer2,
            nameCustomer: providers[1].name,
            comment: "O acabamento deixou a desejar",
            rating: 2,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer2,
            nameCustomer: providers[1].name,
            comment: "Ótimo",
            rating: 5,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider1,
            idCustomer: idCustomer2,
            nameCustomer: providers[1].name,
            comment: "Adorei",
            rating: 5,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
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

}

module.exports = {
    populateDatabase
}