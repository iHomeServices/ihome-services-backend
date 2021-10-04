const providerRepository = require('../repository/providerRepository');

async function getProviders() {
    const providers = await providerRepository.getProviders();
    return providers;
}

module.exports = {
    getProviders
}