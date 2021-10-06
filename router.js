var express = require('express');
const categoryRouter = require('./controller/categoryController');
const customerRouter = require('./controller/customerController');
var router = express.Router()
var providerRouter = require('./controller/ProviderController');
var initialLoad = require('./repository/initialLoad');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next();
})

router.get('/initial-load', async (req, res) => {
  initialLoad.populateDatabase();
  res.send("Banco de dados populado com sucesso");
});

router.use('/provider', providerRouter);
router.use('/customer', customerRouter);
router.use('/category', categoryRouter);

module.exports = router