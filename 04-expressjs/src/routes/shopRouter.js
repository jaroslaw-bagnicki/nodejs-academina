// const path = require('path');
const shopRouter = require('express').Router();
const { HOME } = require('../const/routes');

const { products } = require('./productController');

shopRouter.route(HOME)
    .get(function getHomePage(req, res) {
        // res.sendFile(path.resolve('src/views/home.html'));
        console.log({ products });
        res.render('home', { products, noProducts: products.length === 0, title: 'Shop', path: '/', active: { home: true } });
    });

module.exports = shopRouter;
