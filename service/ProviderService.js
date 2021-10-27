const providerRepository = require('../repository/providerRepository');
const { ObjectId } = require('bson');

async function getProviders() {
    try {
        const providers = await providerRepository.getProviders();

        return providers;
    } catch (err) {
        throw err;
    }
}

async function getProviderById(id) {
    const provider = await providerRepository.getProviderById(id);
    provider.services.map(service => {
        service.startDate = service.startDate != null ? new Date(service.startDate).toLocaleDateString() : null;
        service.endDate = service.endDate != null ? new Date(service.endDate).toLocaleDateString() : null;
    });

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

async function editProvider(id, provider) {
    const result = providerRepository.editProvider(id, provider);
    return result;
}

async function finishService(id) {
    const result = providerRepository.finishService(id);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider,
    finishService
}