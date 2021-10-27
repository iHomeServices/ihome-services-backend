var express = require('express');
var customerRouter = express.Router();
const customerService = require('../service/customerService');

customerRouter.get('/', async (req, res) => {
    const customers = await customerService.getCustomers();
    res.send(customers);
});

customerRouter.get('/:id', async (req, res) => {
    const customer = await customerService.getCustomerById(req.params.id);
    res.send(customer);
});

module.exports = customerRouter;