const express = require('express');

let id = 0;
let products = [
    // { id: 0, name: 'Book' },
    // { id: 1, name: 'Car' },
    // { id: 2, name: 'Mouse' },
];

const adminRouter = express.Router();

adminRouter.get('/products', function getProducts(req, res) {
    res.render('admin/products', { title: 'Admin - products', activeProducts: true , products, noProducts: products.length === 0, });
});


adminRouter.get('/add-product', function getAddProduct(req, res) {
        res.render('admin/add-product', { title: 'Admin - add products', activeAddProduct: true });
    });

adminRouter.post('/add-product', function postAddProduct(req, res) {
    products.push({ id: id++, name: req.body.name });
    res.redirect('back');
});

adminRouter.post('/delete-product/:id', function postDeleteProduct(req, res) {
    const deleteId = req.params.id;
    const index = products.findIndex(product => product.id === +deleteId);
    if (~index) {
        products.splice(index, 1);
        res.redirect('back');

    } else {
        res.sendStatus(404);
    }
});

module.exports = adminRouter;