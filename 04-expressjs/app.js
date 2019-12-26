const express = require('express');
const logger = require('./middlewares/logger');

const PORT = 3000;
const ROUTES = {
    HOME: '/',
    ADD_PRODUCT: '/add-product',
};

const app = express();

app.use(logger);

app.use(ROUTES.ADD_PRODUCT, (req, res) => {
   res.send('<h1>Add product page.</h1>');
});

app.use(ROUTES.HOME, (req, res) => {
    res.send('<h1>Hello from Express!</h1>');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}.`));
