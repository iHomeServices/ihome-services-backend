var express = require('express');
var providerRouter = express.Router();
const providerService = require('../service/ProviderService');

providerRouter.get('/', (req, res) => {
    const providers = providerService.getProviders();
    res.send(providers);
});

module.exports = providerRouter;