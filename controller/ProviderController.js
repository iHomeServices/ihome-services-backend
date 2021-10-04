var express = require('express');
var providerRouter = express.Router();
const providerService = require('../service/providerService');

providerRouter.get('/', async (req, res) => {
    const providers = await providerService.getProviders();
    res.send(providers);
});

module.exports = providerRouter;