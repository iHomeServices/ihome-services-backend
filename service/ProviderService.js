const providerRepository = require('../repository/ProviderRepository');

function getProviders() {
    const providers = providerRepository.getProviders();
    return providers;
}

module.exports = {
    getProviders
}