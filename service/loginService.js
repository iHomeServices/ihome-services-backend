const loginRepository = require('../repository/loginRepository');
const providerRepository = require('../repository/providerRepository');
const customerRepository = require('../repository/customerRepository');

async function authenticate(login) {
    try {
        const user = await loginRepository.authenticate(login);
        if (user) {
            if (user.isProvider) {
                return providerRepository.getProviderById(user.userId.toString());
            }
            return customerRepository.getCustomerById(user.userId.toString());
        }
        return null;
    } catch (err) {
        throw err;
    }
}

async function register(user) {
    let userId;
    let userRegister = {...user};
    delete user.isProvider;
    delete user.username;
    delete user.password;

    try {
        if (userRegister.isProvider) {
            const result = await providerRepository.register(user);
            userId = result.insertedId;
        } else {
            const result = await customerRepository.register(user);
            userId = result.insertedId;
        }

        delete userRegister.name;
        userRegister.userId = userId;
        await loginRepository.register(userRegister);
    } catch (err) {
        throw err;
    }
}

module.exports = {
    authenticate,
    register
}