const providerRepository = require('../repository/providerRepository');

async function getProviders() {
    const providers = await providerRepository.getProviders();
    return providers;
}

async function getProviderById(id) {
    const provider = await providerRepository.getProviderById(id);
    return provider;
}

async function createService(service) {
    const result = providerRepository.createService(service);
    return result;
}

module.exports = {
    getProviders,
    getProviderById,
    createService
}