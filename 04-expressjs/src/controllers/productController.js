/** @typedef {import('express').RequestHandler} RequestHandler */

const productStore = require('../models/productStore');

/** @type {RequestHandler} */
exports.getProducts = (req, res) => {
    const products = productStore.getAll();
    res.render('admin/products', { title: 'Admin - products', activeProducts: true , products, noProducts: products.length === 0, });
};

/** @type {RequestHandler} */
exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', { title: 'Admin - add products', activeAddProduct: true });
};

/** @type {RequestHandler} */
exports.postAddProduct = (req, res) => {
    const result = productStore.add(req.body.name);
    if (result) {
        res.redirect('back');
    } else {
        res.sendStatus(500);
    }
};

/** @type {RequestHandler} */
exports.postDeleteProduct = (req, res) => {
    const result = productStore.remove(+req.params.id);
    if (result) {
        res.redirect('back');

    } else {
        res.sendStatus(500);
    }
};

