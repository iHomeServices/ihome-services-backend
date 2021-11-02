var express = require('express');
var providerRouter = express.Router();
const providerService = require('../service/providerService');
const multer = require('multer');
const fs = require('fs');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'controller/avatar')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

var upload = multer({ storage: storage })

providerRouter.get('/', async (req, res) => {
    const providers = await providerService.getProviders();
    res.send(providers);
});

providerRouter.get('/:id', async (req, res) => {
    const provider = await providerService.getProviderById(req.params.id);
    res.send(provider);
});

providerRouter.post('/service', async (req, res) => {
    const service = req.body;
    const result = providerService.createService(service);
    res.status(200).send(result);
});

providerRouter.put('/edit/:id', async (req, res) => {
    let provider = req.body;
    providerService.editProvider(req.params.id, provider);
    res.status(200).send();
});

providerRouter.post('/upload-avatar', upload.single('avatar'), (req, res, next) => {
    const file = req.file;
    res.send(file);
});

providerRouter.get('/avatar/:filename', (req, res) => {
    const filename = req.params.filename;
    const path = __dirname + '/avatar/' + filename;
    res.sendFile(path);
});

// providerRouter.put('/edit/:id', upload.single('avatar'), async (req, res) => {
//     var img = fs.readFileSync(req.file.path);
//     var encode_image = img.toString('base64');
//     var finalImg = {
//         contentType: req.file.mimetype,
//         image: Buffer.from(encode_image, 'base64')
//     }
//     let provider = req.body;
//     provider.avatar = finalImg;
//     providerService.editProvider(req.params.id, provider);
//     res.status(200).send();
// });

providerRouter.post('/finish-service/:id', async (req, res) => {
    const evaluation = req.body
    providerService.finishServiceAndAddEvaluation(req.params.id, evaluation);
    res.status(200).send();
});

providerRouter.delete('/cancel-service/:id', async (req, res) => {
    providerService.cancelService(req.params.id);
    res.status(200).send();
});

module.exports = providerRouter;