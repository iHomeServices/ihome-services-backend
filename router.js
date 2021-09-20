var express = require('express')
var router = express.Router()
var providerRouter = require('./controller/ProviderController');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.use('/provider', providerRouter);

module.exports = router