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
});

providerRouter.post('/service', async (req, res) => {
    // await uploadImage(req, res);

    const service = req.body;
    const result = providerService.createService(service);
    res.status(200).send();
});

providerRouter.put('/edit/:id', async (req, res) => {
    const provider = req.body;
    providerService.editProvider(req.params.id, provider);
    res.status(200).send();
});

providerRouter.post('/finish-service/:id', async (req, res) => {
    const evaluation = req.body
    providerService.finishServiceAndAddEvaluation(req.params.id, evaluation);
    res.status(200).send();
});

providerRouter.delete('/cancel-service/:id', async (req, res) => {
    providerService.cancelService(req.params.id);
    res.status(200).send();
});

providerRouter.post('/upload-avatar', (req, res, next) => {
    const formidable = require('formidable');
    const fs = require('fs');
    const form = new formidable.IncomingForm();

    form.parse(req, (err, fields, files) => {
 
        console.log('files', files);
        const path = require('path');
        const oldpath = files.filetoupload.filepath;
        const newpath = path.join(__dirname, 'public', 'files');
        
        fs.renameSync(oldpath, newpath);
        res.send('File uploaded and moved!');
      });
});

module.exports = providerRouter;