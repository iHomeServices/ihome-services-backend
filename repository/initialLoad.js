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
            avatar: 'https://thumbs.dreamstime.com/z/dia-do-trabalho-ou-dos-trabalhadores-trabalhador-com-tijolo-homem-usa-uniforme-de-construtor-bonito-no-capacete-maduro-veste-220950736.jpg',
            name: "Ailton Guimaraes",
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "ailton@hotmail.com",
            categoryId: idCategory1,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider2,
            name: "Vitor Hugo Santos",
            avatar: 'https://thumbs.dreamstime.com/b/trabalhador-sujo-25658674.jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "vitor.hugosantos@gmail.com",
            categoryId: idCategory2,
            description: "Curso de eletricista de 2 anos no SENAI\nExperiência de 3 anos trabalhando\nBom relacionamento com os clientes\nServiço de qualidade"
        },
        {
            _id: idProvider3,
            name: "Gabriel Oliveira",
            avatar: 'https://w600.comps.canstockphoto.com/persa-rosto-homem-feliz-trabalhador-foto_csp74921371.jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider4,
            name: "Henrique Silva",
            avatar: 'https://img.freepik.com/fotos-gratis/trabalhador-homem-no-capacete-isolado-na-parede-verde_1303-20279.jpg?size=626&ext=jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider5,
            name: "Mateus Gomes",
            avatar: 'https://w600.comps.canstockphoto.com/jovem-trabalhador-desgastar-banco-de-imagens_csp88651801.jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider6,
            name: "Lucas de Araujo",
            avatar: 'https://static.vecteezy.com/ti/fotos-gratis/p1/867504-seu-trabalhador-medio-foto.jpg',
            city: "Ibaté",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider7,
            name: "Thiago Augusto Nunes",
            avatar: 'https://cdn.w600.comps.canstockphoto.com.br/eletricista-trabalhador-homem-fotos_csp16091289.jpg',
            city: "Araraquara",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "mjackson@gmail.com",
            categoryId: idCategory2,
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate at, eligendi ex impedit magni totam illum modi quas dignissimos nisi reprehenderit officiis placeat, dolores culpa sapiente, unde maxime saepe sed."
        },
        {
            _id: idProvider8,
            name: "Bruno Rodrigues",
            avatar: 'https://thumbs.dreamstime.com/b/homem-sujo-novo-do-trabalhador-com-o-capacete-do-capacete-de-seguran%C3%A7a-que-guarda-um-glo-do-trabalho-52461046.jpg',
            city: "São Carlos",
            state: "SP",
            phoneNumber: "5516994641225",
            email: "bruno.rodrigues92@gmail.com",
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
            idProvider: idProvider2,
            idCustomer: idCustomer3,
            nameCustomer: "João Vitor ",
            comment: "Baum demais esse serviço, ficou top!",
            rating: 5,
            startDate: 1634342973000,
            endDate: null,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer1,
            nameCustomer: "Carlos Felicio",
            comment: "Muito bom",
            rating: 5,
            startDate: 1629850173000,
            endDate: 1630282173000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: "Gustavo Bueno",
            comment: "Serviço ficou mais ou menos",
            rating: 3,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: "Renato Pereira",
            comment: "Gostei muito",
            rating: 4,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: "Nathan Cardoso",
            comment: "O acabamento deixou a desejar",
            rating: 2,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: "Anderson Ferreira",
            comment: "Ótimo",
            rating: 5,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
        {
            idProvider: idProvider2,
            idCustomer: idCustomer2,
            nameCustomer: "Pablo Laurette",
            comment: "Adorei",
            rating: 5,
            startDate: 1620691773000,
            endDate: 1621901373000,
            isDone: true,
        },
    ];

    const login = [
        {
            userId: idProvider8,
            username: "b.rodrigues",
            password: "teste123!",
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