const { ADD_PRODUCT } = require('../const/routes');
const addProductRouter = require('express').Router();

addProductRouter.route(ADD_PRODUCT)
    .get((req, res) => res.send(`
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
        `))
    .post((req, res) => {
        console.log({ body: req.body });
        return res.sendStatus(201);
    });

module.exports = addProductRouter;
