const providerRepository = require('../repository/providerRepository');
const populateDatabase = require('../repository/populateDatabase');

async function getProviders() {
    // const providers = providerRepository.getProviders();
    populateDatabase.populate();
}

module.exports = {
    getProviders
}