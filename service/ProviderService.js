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
    if(provider.services) {
        provider.services.map(service => {
            service.startDate = service.startDate != null ? new Date(service.startDate).toLocaleDateString() : null;
            service.endDate = service.endDate != null ? new Date(service.endDate).toLocaleDateString() : null;
        });
    }

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
    const oldProvider = await getProviderById(id);
    delete oldProvider.services;
    delete oldProvider.login;

    const newProvider = {
        name: provider.name || oldProvider.name,
        avatar: provider.avatar || oldProvider.avatar,
        city: provider.city || oldProvider.city,
        state: provider.state || oldProvider.state,
        phoneNumber: provider.phoneNumber || oldProvider.phoneNumber,
        email: provider.email || oldProvider.email,
        categoryId: provider.categoryId || oldProvider.categoryId,
        description: provider.description || oldProvider.description,
    };

    const result = providerRepository.editProvider(id, newProvider);
    return result;
}

async function finishServiceAndAddEvaluation(id, evaluation) {
    const result = providerRepository.finishServiceAndAddEvaluation(id, evaluation);
    return result;
}

async function cancelService(id) {
    const result = providerRepository.cancelService(id);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService,
    editProvider,
    finishServiceAndAddEvaluation,
    cancelService
}