const path = require('path');
const addProductRouter = require('express').Router();
const { ADD_PRODUCT } = require('../const/routes');

const products = [];

addProductRouter.route(ADD_PRODUCT)
    .get(function getAddProductPage(req, res) {
        res.sendFile(path.resolve('src/views/add-product.html'));
    })
    .post(function addProductHandler(req, res) {
        console.log({ body: req.body });
        products.push({ name: req.body.name });
        res.redirect('/');
    });

module.exports = {
    addProductRouter,
    products,
};
