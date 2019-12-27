const addProductRouter = require('express').Router();
const { ADD_PRODUCT } = require('../const/routes');

addProductRouter.route(ADD_PRODUCT)
    .get(function getAddProductPage(req, res) {
        res.send(`
            <html>
                <head>
                    <title>Node.js Course</title>
                </head>
                <body>
                    <h2>Add new product</h2>
                    <form method="POST">
                        <label for="name">Product name:</label>
                        <input type="text" name="name" />
                        <button type="submit">Add new product</button>
                    </form>
                </body>
            </html>
        `);
    })
    .post(function addProductHandler(req, res) {
        console.log({ body: req.body });
        res.sendStatus(201);
    });

module.exports = addProductRouter;
