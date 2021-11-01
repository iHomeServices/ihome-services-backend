var express = require('express');
var loginRouter = express.Router();
const loginService = require('../service/loginService');

loginRouter.post('/', async (req, res) => {
    const login = req.body;
    const user = await loginService.authenticate(login);

    if (user) {
        res.status(200).send(user);
    } else {
        res.status(401).send('Invalid username or password');
    }
});

loginRouter.post('/register', async (req, res) => {
    const user = req.body;
    const registeredUser = await loginService.register(user);
    res.send(registeredUser);
});

module.exports = loginRouter;