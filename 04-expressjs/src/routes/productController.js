const express = require('express');

let id = 0;
let products = [
    // { id: 0, name: 'Book' },
    // { id: 1, name: 'Car' },
    // { id: 2, name: 'Mouse' },
];

const productController = express.Router();

productController
    .post('/api/product/add', function addProductHandler(req, res) {
        console.log({ body: req.body });
        products.push({ id: id++, name: req.body.name });

        res.redirect('/');
    })
    .post('/api/product/delete/:id', function deleteProductHandler(req, res) {
        console.log({ id: req.params.id });
        const deleteId = req.params.id;
        const index = products.findIndex(product => product.id === +deleteId);
        if (~index) {
            products.splice(index, 1);
            res.redirect('/');

        } else {
            res.sendStatus(404);
        }
    });

module.exports = {
    productController,
    products,
};
