const customerRepository = require('../repository/customerRepository');

async function getCustomers() {
    const customers = await customerRepository.getCustomers();
    return customers;
}

async function getCustomerById(id) {
    const customer = await customerRepository.getCustomerById(id);
    customer.services.map(service => {
        service.startDate = service.startDate != null ? new Date(service.startDate).toLocaleDateString() : null;
        service.endDate = service.endDate != null ? new Date(service.endDate).toLocaleDateString() : null;
    });
    return customer;
}

module.exports = {
    getCustomers,
    getCustomerById
}