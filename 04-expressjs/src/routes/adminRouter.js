const path = require('path');
const express = require('express');

const adminRouter = express.Router();

adminRouter.route('/admin/add-product')
    .get(function getAddProductPage(req, res) {
        res.sendFile(path.resolve('src/views/add-product.html'));
    });

module.exports = adminRouter;