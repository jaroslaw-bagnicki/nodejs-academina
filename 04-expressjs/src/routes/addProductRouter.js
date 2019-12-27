const path = require('path');
const addProductRouter = require('express').Router();
const { ADD_PRODUCT } = require('../const/routes');

addProductRouter.route(ADD_PRODUCT)
    .get(function getAddProductPage(req, res) {
        res.sendFile(path.resolve('src/views/add-product.html'));
    })
    .post(function addProductHandler(req, res) {
        console.log({ body: req.body });
        res.sendStatus(201);
    });

module.exports = addProductRouter;
