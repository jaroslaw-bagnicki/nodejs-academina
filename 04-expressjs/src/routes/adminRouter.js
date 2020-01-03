const express = require('express');
const productController = require('../controllers/productController');

const adminRouter = express.Router();

adminRouter.get('/products', productController.getProducts);
adminRouter.get('/add-product', productController.getAddProduct);
adminRouter.post('/add-product', productController.postAddProduct);
adminRouter.post('/delete-product/:id', productController.postDeleteProduct);

module.exports = adminRouter;