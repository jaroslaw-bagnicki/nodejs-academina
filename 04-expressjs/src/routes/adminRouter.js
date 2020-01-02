const express = require('express');

const adminRouter = express.Router();

adminRouter.route('/admin/add-product')
    .get(function getAddProductPage(req, res) {
        res.render('add-product', { title: 'Add new product', path: '/admin/add-product'});
    });

module.exports = adminRouter;