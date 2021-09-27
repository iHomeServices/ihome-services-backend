var express = require('express');
var providerRouter = express.Router();
const providerService = require('../service/providerService');

providerRouter.get('/', async (req, res) => {
    providerService.getProviders();
    res.send("providers");
});

module.exports = providerRouter;