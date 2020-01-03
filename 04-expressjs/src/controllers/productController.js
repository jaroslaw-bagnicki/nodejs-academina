let id = 0;
let products = [
    // { id: 0, name: 'Book' },
    // { id: 1, name: 'Car' },
    // { id: 2, name: 'Mouse' },
];

/** @type {import('express').RequestHandler} */
exports.getProducts = (req, res) => {
    res.render('admin/products', { title: 'Admin - products', activeProducts: true , products, noProducts: products.length === 0, });
};

/** @type {import('express').RequestHandler} */
exports.getAddProduct = (req, res) => {
    res.render('admin/add-product', { title: 'Admin - add products', activeAddProduct: true });
};

/** @type {import('express').RequestHandler} */
exports.postAddProduct = (req, res) => {
    products.push({ id: id++, name: req.body.name });
    res.redirect('back');
};

/** @type {import('express').RequestHandler} */
exports.postDeleteProduct = (req, res) => {
    const deleteId = req.params.id;
    const index = products.findIndex(product => product.id === +deleteId);
    if (~index) {
        products.splice(index, 1);
        res.redirect('back');

    } else {
        res.sendStatus(404);
    }
};

