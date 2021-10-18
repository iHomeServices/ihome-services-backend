const providerRepository = require('../repository/providerRepository');
const { ObjectId } = require('bson');

async function getProviders() {
    try{
        const providers = await providerRepository.getProviders();
        return providers;
    }catch(err){
        throw err;
    }
}

async function getProviderById(id) {
    const provider = await providerRepository.getProviderById(id);
    return provider;
}

async function createService(service) {
    const rightService = {
        ...service,
        idProvider: ObjectId(service.idProvider),
        idCustomer: ObjectId(service.idCustomer)
    };
    const result = providerRepository.createService(rightService);
    return result;
}

async function editProvider(provider) {
    console.log(provider);
    const rightProvider = {
        ...provider,
        // id: ObjectId(provider.id)
    }
    console.log(rightProvider);
    const result = providerRepository.editProvider(provider);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider
}