var express = require('express');
var categoryRouter = express.Router();
const categoryService = require('../service/categoryService');

categoryRouter.get('/', async (req, res) => {
    const categories = await categoryService.getCategories();
    res.send(categories);
});

module.exports = categoryRouter;