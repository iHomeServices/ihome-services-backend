const customerRepository = require('../repository/customerRepository');

async function getCustomers() {
    const customers = await customerRepository.getCustomers();
    return customers;
}

module.exports = {
    getCustomers
}