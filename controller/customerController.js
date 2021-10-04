var express = require('express');
var customerRouter = express.Router();
const customerService = require('../service/customerService');

customerRouter.get('/', async (req, res) => {
    const customers = await customerService.getCustomers();
    res.send(customers);
});

module.exports = customerRouter;