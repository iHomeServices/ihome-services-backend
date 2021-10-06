var express = require('express');
var providerRouter = express.Router();
const providerService = require('../service/providerService');

providerRouter.get('/', async (req, res) => {
    const providers = await providerService.getProviders();
    res.send(providers);
});

providerRouter.get('/:id', async (req, res) => {
    const provider = await providerService.getProviderById(req.params.id);
    res.send(provider);
})

module.exports = providerRouter;