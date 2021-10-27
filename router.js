var express = require('express');
var router = express.Router()
const categoryRouter = require('./controller/categoryController');
const customerRouter = require('./controller/customerController');
var providerRouter = require('./controller/providerController');
var loginRouter = require('./controller/loginController');
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
router.use('/login', loginRouter);

module.exports = router